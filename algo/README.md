to run    
``` python3 algo.py ```


time complexity is O(N)     
since we loop through input N time to convert it to set and in worst case scenario with no answer (None) we will end up loop through input again N time to find it's prefix/suffix 

``` 
O(N)+O(N) = O(N)
```

memory complexity is O(N) for storing input again, in format of set 
