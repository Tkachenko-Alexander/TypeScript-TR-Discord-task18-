function maxArea(height: number[]): number {

    let [maximum, left, right] = [0, 0, height.length - 1];

    while(left < right){
        const smallerHeight = Math.min(height[left], height[right]);
        maximum = Math.max(maximum, smallerHeight * (right - left));

        if(height[left] < height[right]){
            left++;
        }
        else{
            right--;
        }
    }

    return maximum;
    
};