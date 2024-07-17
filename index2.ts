function lengthOfLongestSubstring(s: string): number {
    const cMap = new Map<string, number>();
    const iMap = new Map<number, string>();
    let max = 0;

    for (let i=0; i < s.length; i++) {
        let c = s[i];


        if (cMap.has(c)) {
            max = Math.max(max, cMap.size);
            let j = cMap.get(c);
            while (iMap.has(j)) {
                cMap.delete(iMap.get(j));
                iMap.delete(j);
                j--;
            }
        }

        cMap.set(c, i);
        iMap.set(i, c);
    }
    return Math.max(cMap.size, max)
};