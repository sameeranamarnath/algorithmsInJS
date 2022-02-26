/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 assuming that nums is sorted
 */
var search = function(nums, target) {
    
  let leftIndex=0;
  let rightIndex=nums.length-1;
    
  while(leftIndex<=rightIndex)
      {
       
       let middle= (leftIndex+rightIndex)>>1;
        if(target<nums[middle])
            {
                rightIndex=middle-1;
            }
          
         else if(target>nums[middle])
             {
                 leftIndex=middle+1;
             }
        
          else
              {
                  return middle;
              }
      }
    
     return -1;

};
