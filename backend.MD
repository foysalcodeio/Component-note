## জেসন ডাটা যদি ডাটাবেস এ স্টোর করা থাকে এবং সেখান থেকে যদি দেখতে চাই তাহলে এই সিম্পল গেট অপারেশন করতে হবে।
```
app.get('/products', async (req, res)=> {
      const result = await productCollection.find().toArray();
      res.send(result);
  })
```
## কতগুলো ডাটা আছে সেটা যদি গননা করতে চাই তাহলে,
```
app.get('/productCount', async(req, res) => {
     const count = await productCollection.estimatedDocumentCount();
     res.send({ count });
 })
```
