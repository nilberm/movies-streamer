import type { MovieProps } from '@/interfaces';

class Storage {
  #createFavoriteList() {
    localStorage.setItem('favoriteList', JSON.stringify([]));
  }

  // Create
  addItem(item: MovieProps) {
    const list = this.getFavoriteList();
    const isOnList = this.getItem(item.id);

    if (!isOnList) {
      list.push(item);
      localStorage.setItem('favoriteList', JSON.stringify(list));
    }
  }

  // Read
  getItem(id: number | string) {
    const list = this.getFavoriteList();

    let isOnTheList = false;

    list.forEach((element: MovieProps) => {
      if (element.id === Number(id)) {
        isOnTheList = true;
      }
    });
    // return item
    return isOnTheList;
  }

  // Delete
  removeItem(id: number) {
    const list = this.getFavoriteList();

    list.forEach((element: MovieProps, index: number) => {
      if (element.id === id) {
        list.splice(index, 1);
      }
    });
    localStorage.setItem('favoriteList', JSON.stringify(list));
  }

  getFavoriteList() {
    // @ts-ignore
    let favoriteList = JSON.parse(localStorage.getItem('favoriteList'));

    if (favoriteList == null) {
      this.#createFavoriteList();
    // @ts-ignore
      favoriteList = JSON.parse(localStorage.getItem('favoriteList'));
    }

    return favoriteList;
  }
}

const storage = new Storage();

export default storage;
