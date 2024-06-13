def solve(word_list, target):
    word_set = set(word_list)  # To allow O(1) look-up time
    
    for word in word_list:
        # Check if the target can be split into two valid words in the list
        prefix = target[:len(word)]
        suffix = target[len(word):]
        
        if prefix == suffix: # avoid mirror case
            continue
        if prefix in word_set and suffix in word_set:
            return (prefix, suffix)
    
    return None

# print(solve(['ab','bc','cd'], 'abcd'))
# print(solve(['ab','bc','cd'], 'cdab'))
# print(solve(['ab','bc','cd'], 'abab'))


