function longestPalindrome(s: string): string {
    let maxPalindrome: [number, number, number] = [-1, -1, 0];
    for(let i=0 ; i<s.length ; i++) {
        let oddPalindrome = expandFromMiddle(s, i, i);
        let localMaximum = oddPalindrome;
        if(i< s.length - 1 && s[i] == s[i+1]) {
            let evenPalindrome = expandFromMiddle(s, i, i+1);
            if(localMaximum[2] < evenPalindrome[2]){
                localMaximum = evenPalindrome;
            };
        }    

        if(maxPalindrome[2] < localMaximum[2]) {
            maxPalindrome = localMaximum;
        }
    }

    return s.substring(maxPalindrome[0], maxPalindrome[1] + 1);    
};

function expandFromMiddle(s: string, left: number, right: number): [number, number, number]{
    do{
        left--;
        right++;
    }while(left >= 0 && right < s.length && s[right] == s[left])

    return [left+1, right-1, right - left - 1];
}