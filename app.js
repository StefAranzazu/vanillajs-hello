window.onload = () => {
    
      pronoun[pronounIndex] + adj[adjIndex] + noun[nounIndex] + ".com";
}
  
  let pronoun = ["the", "our", "my",];
  let adj = ["great", "big","favorite","mini"];
  let noun = ["jogger", "racoon","person","dad"];
  
  let pronounIndex = Math.floor(Math.random() * pronoun.length);
  let adjIndex = Math.floor(Math.random() * adj.length);
  let nounIndex = Math.floor(Math.random() * noun.length);
  
  console.log(pronounIndex + adjIndex + nounIndex + ".com");