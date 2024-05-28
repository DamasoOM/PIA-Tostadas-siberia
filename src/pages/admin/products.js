import { useEffect, useState } from "react";
import AdminLayout from "../../components/admin/AdminLayout"
import { supabase } from "../../utils/supabase";
import Modal from "../../components/Modal";

const Products = () => {

    const [products, setProducts] = useState([]); 

    const [showModal, setShowModal] = useState(false);

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async () => {
        const {data, error} = await supabase.from('dishes').select('*');

        console.log("DISHES: ", data)

        setProducts(data)
    }

    const onNewDish = async (dish) => {
        const { data, error } = await supabase.from('dishes').insert([dish]);
    }

    // onClick={()=>onNewDish(dish)}

    // const dish = {
//   name: 'Tostada Especial',
//   recipe_id: 101,
//   price: 150,
//   // agrega otras propiedades según la estructura de tu tabla
// };

    return(
        <AdminLayout>
            <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
                    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                        <h1 class="h2">Productos</h1>
                        <button class="btn btn-primary" id="addProductBtn" onClick={()=>setShowModal(true)}>Agregar</button>
                    </div>

                    <div class="table-responsive">
                        <table class="table table-striped table-sm">
                            <thead>
                                <tr>
                                <th>Producto</th>
                                <th>Categoría</th>
                                <th>Precio unitario</th>
                                <th>Receta</th>
                                <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody id="productsTableBody">
                                {products.map((product) => (
                                <tr key={product.id}>
                                    <td>{product.name}</td>
                                    <td>{product.category}</td>
                                    <td>${product.price}.00</td>
                                    <td>{product.recipe_id}</td>
                                    <td>
                                    <div>Editar</div>
                                    <div>Eliminar</div>
                                    </td>
                                </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </main>

                <Modal
                    show={showModal}
                    handleClose={()=>{setShowModal(false)}}
                    title={"Agregar producto"}
                    // data={{}}
                    // handleSave={()=>{}}
                >
                    <form id="editProductForm">
                        <input type="hidden" id="editProductId"/>
                        <div class="form-group">
                            <label for="editProductName">Nombre</label>
                            <input type="text" class="form-control" id="editProductName"/>
                        </div>
                        <div class="form-group">
                            <label for="editProductCategory">Categoría</label>
                            <input type="text" class="form-control" id="editProductCategory"/>
                        </div>
                        <div class="form-group">
                            <label for="editProductPrice">Precio unitario</label>
                            <input type="number" class="form-control" id="editProductPrice"/>
                        </div>
                        <div class="form-group">
                            <label for="editProductRecipe">Receta</label>
                            <input type="text" class="form-control" id="editProductRecipe"/>
                        </div>
                        <button type="submit" class="btn btn-primary">Guardar cambios</button>
                    </form>
                </Modal>
        </AdminLayout>
    )
}

export default Products