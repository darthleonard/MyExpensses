import { Storage } from '@ionic/storage';

export class BaseRecord {
    Id: string;
    CreationDate: Date;
    LasModDate: Date;

    save(storage: Storage) {
        if (this.Id === undefined) {
            this.saveNew(storage);
        } else {
            this.saveStorage(storage);
        }
    }

    saveNew(storage: Storage) {
        storage.get('counter').then(v => {
            const idx = (v === null ? 1 : v + 1);
            this.Id = `${this.constructor.name}${idx}`;
            this.CreationDate = new Date();
            this.saveStorage(storage);
            storage.set('counter', idx);
        });
    }

    delete(storage: Storage) {
        storage.remove(this.Id.toString());
    }

    isNew() {
        return this.Id === undefined;
    }

    private saveStorage(storage: Storage) {
        this.LasModDate = new Date();
        storage.set(this.Id.toString(), JSON.stringify(this));
    }
}
