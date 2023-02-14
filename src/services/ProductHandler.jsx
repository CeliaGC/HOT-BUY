import ProductService from "./ProductServices";

const ProductHandler = {
    addProduct(newProduct){
        if (!newProduct) {
            return;
        }

        let product = {
            "name": newProduct.name,
            "price": newProduct.price,
            "img": newProduct.img,
            "category": newProduct.category,
            "productStatus": newProduct.productStatus,
            "unit": newProduct.unit,
            "description": newProduct.description,
            "date": newProduct.date,
            "id": ""
        }
        taskService.submitTask(task);
        return task;
    },
    loadTasks(){
        return taskService.getTasks();
    },
    loadTask(id) {
        return taskService.getTask(id);
    },
    deleteTask(id){
        return taskService.deleteTask(id);
    },
    updateTask(newTask){
        if (!newTask) {
            return;
        }

        let newTaskModel = {
            "name": newTask.name,
            "done": false,
            "id": newTask.id
        }

        let id = newTaskModel.id;

        return taskService.updateTask(id, newTaskModel);
    }
}

export 