import { useState } from "react"
import { ListCategories } from "./components/ListCategories";
import { AddCategory } from "./components/AddCategory";


export const GiftExpertApp = () => {

  const handleAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setcategories([newCategory, ...categories]);
  }

  const [categories, setcategories] = useState([ 'Robotech']);

  return (
    <>
    <h1>GiftExpertApp</h1>    
    <AddCategory handleAddCategory={handleAddCategory} />
    <ListCategories categories={categories} />
    

    </>
  )
}
