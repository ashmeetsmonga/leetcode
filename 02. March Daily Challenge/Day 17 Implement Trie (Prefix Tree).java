class Trie {
    
    Trie[] children;
    boolean isEnd;

    /** Initialize your data structure here. */
    public Trie() {
        children = new Trie[26];
        isEnd = false;
    }
    
    /** Inserts a word into the trie. */
    public void insert(String word) {
    Trie cur = this;
		for(char c : word.toCharArray()) {
			if(cur.children[c - 'a'] == null) cur.children[c - 'a'] = new Trie();
			cur = cur.children[c - 'a'];
		}
		cur.isEnd = true;
    }
    
    /** Returns if the word is in the trie. */
    public boolean search(String word) {
        Trie cur = this;
		for(char c : word.toCharArray()) {
			cur = cur.children[c - 'a'];
			if(cur == null) return false;
		}
		
		return cur.isEnd;
    }
    
    /** Returns if there is any word in the trie that starts with the given prefix. */
    public boolean startsWith(String prefix) {
        Trie cur = this;
		for(char c : prefix.toCharArray()) {
			cur = cur.children[c - 'a'];
			if(cur == null) return false;
		}
		
		return true;
    }
}

/**
 * Your Trie object will be instantiated and called as such:
 * Trie obj = new Trie();
 * obj.insert(word);
 * boolean param_2 = obj.search(word);
 * boolean param_3 = obj.startsWith(prefix);
 */