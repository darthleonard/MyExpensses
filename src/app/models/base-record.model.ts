import { Storage } from '@ionic/storage';

export class BaseRecord {
    Id: string;
    CreationDate: Date;
    LastModDate: Date;

    isNew() {
        return this.Id === undefined;
    }

    save(storage: Storage) {
        if (this.Id === undefined) {
            this.saveNew(storage);
        } else {
            this.saveStorage(storage);
        }
    }

    delete(storage: Storage) {
        storage.remove(this.Id.toString());
    }

    private saveNew(storage: Storage) {
        storage.get('counter').then(v => {
            const idx = (v === null ? 1 : v + 1);
            this.Id = `${this.constructor.name}${idx}`;
            this.CreationDate = new Date();
            this.saveStorage(storage);
            storage.set('counter', idx);
        });
    }

    private saveStorage(storage: Storage) {
        this.LastModDate = new Date();
        storage.set(this.Id.toString(), JSON.stringify(this));
    }
}
