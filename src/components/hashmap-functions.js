import HashMap from './hashmaps';

export const hasPalindrome = x => {
        const str = x.toLowerCase().replace(/([^a-z])/g, '');
        const h = new HashMap();
        for (let i = 0; i < str.length; i++) {
            if(!h.get(str[i])){
                h.set(str[i], 1)
            }
            else {
                h.set(str[i], h.get(str[i]) + 1)
            }
        }
        let odds = 0;
        for (let i = 0; i < str.length; i++) {
            let slot = h.get(str[i])
            if (slot % 2 !== 0) {
                odds ++
            }
        }
        return odds <= 1 ? true : false;
    }
    
export const groupAna = (arr) => {
    const x = arr.map(x => x.split('').sort().join(''));
    let groups = new HashMap()
    for (let i =0; i < x.length; i++) {

        let key = x[i]
        if (!groups.get(key)) {
          groups.set(key, [arr[i]])
        }
        else {
          let val = groups.get(key);
          val.push(arr[i])
          groups.set(key, val)
        }
    }
      return groups
}
