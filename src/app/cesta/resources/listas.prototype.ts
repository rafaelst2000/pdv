declare global {
    interface Array<T> {
      isEmpty(): boolean;
    }
  }
  
  if(!Array.prototype.isEmpty){
    Array.prototype.isEmpty = function () {
      return this.length <= 0;
    }
  }
  
  export { };