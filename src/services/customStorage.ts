import type { MovieProps } from '@/interfaces';

class Storage {
  #createFavoriteList() {
    localStorage.setItem('favoriteList', JSON.stringify([]));
  }

  // Create
  addItem(item: MovieProps) {
    const list = this.getFavoriteList();
    list.push(item);
    localStorage.setItem('favoriteList', JSON.stringify(list));
  }

  // Read
  getItem(id: string) {
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
  removeItem(id: string) {
    const list = this.getFavoriteList();

    list.forEach((element: MovieProps, index: number) => {
      if (element.id === Number(id)) {
        list.splice(index, 1);
      }
    });
    localStorage.setItem('favoriteList', JSON.stringify(list));
  }

  getFavoriteList() {
    let favoriteList = JSON.parse(localStorage.getItem('favoriteList'));

    if (favoriteList == null) {
      this.#createFavoriteList();
      favoriteList = JSON.parse(localStorage.getItem('favoriteList'));
    }

    return favoriteList;
  }
}

const storage = new Storage();

export default storage;
