function vowel_count(str1)
    {
      var v = 'aeiouAEIOU';
      var count1 = 0;
      
      for(var x = 0; x < str1.length ; x++)
      {
        if (v.indexOf(str1[x]) !== -1)
        {
          count1 += 1;
        }
      
      } 
      return count1;
    }
    console.log(vowel_count("Betty bought some butter"));