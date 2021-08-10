export const storeService = {
    query
}

const gStores = [
    {
        id: 1,
        lat: 40.712776,
        lng: -74.005974,
        phone: '182 - 804 - 5039',
        storeName: 'New York, Thiel and Lubowitz',
        zipCode: '662970'
    },
    {
        id: 2,
        lat: 42.484251,
        lng: -71.908259,
        phone: '182 - 804 - 5039',
        storeName: 'Boston Feil Group',
        zipCode: '64-930'
    },
    {
        id: 3,
        lat: 31.442778,
        lng: -100.450279,
        Phone: '187 - 804 - 5039',
        storeName: 'Texas',
        zipCode: '64-932'
    },
    {
        id: 4,
        lat: 41.676388,
        lng: -86.250275,
        phone: '182-21- 5039',
        storeName: 'Lowa',
        zipCode: '64-912'
    },
    {
        id: 5,
        lat: 39.799999,
        lng: -89.650002,
        phone: '182 - 804 - 5039',
        storeName: 'Illinois ',
        zipCode: '64-930'
    },
    {
        id: 6,
        lat: 38.951561,
        lng: -92.328636,
        Phone: '187 - 804 - 5039',
        storeName: 'Missouri',
        zipCode: '64-932'
    },
    {
        id: 7,
        lat: 39.903057,
        lng: -104.954445,
        phone: '182-21- 5039',
        storeName: 'Thornton Colorado ',
        zipCode: '64-912'
    }
]
function query(filter='', sortASC = true) {
    const filterString = filter.toUpperCase();
    const filterStore = [];
    gStores.forEach(store => {
        if (store.storeName.toUpperCase().includes(filterString)) filterStore.push(store);
    })
    _sortStore(filterStore, sortASC)
    return filterStore;
}

function _sortStore(stores, sortASC) {
    if (sortASC) {
        stores.sort((a, b) => {
            var nameA = a.storeName.toUpperCase(); // ignore upper and lowercase
            var nameB = b.storeName.toUpperCase(); // ignore upper and lowercase
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }

            // names must be equal
            return 0;
        });
    } else {
        stores.sort((a, b) => {
            var nameA = a.storeName.toUpperCase(); // ignore upper and lowercase
            var nameB = b.storeName.toUpperCase(); // ignore upper and lowercase
            if (nameA < nameB) {
                return 1;
            }
            if (nameA > nameB) {
                return -1;
            }

            // names must be equal
            return 0;
        });
    }
    return stores
}