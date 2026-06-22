<template>
    <!-- Modal update -->
    <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
    >
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">
                        <template v-if="product.id">Редактирование</template>
                        <template v-else>Создание</template>
                        породукта
                    </h5>
                    <button
                        id="upcrm"
                        type="button"
                        class="close"
                        data-dismiss="modal"
                        aria-label="Close"
                    >
                        <span aria-hidden="true"
                            ><i class="bi bi-x-square"></i
                        ></span>
                    </button>
                </div>

                <div class="modal-body">
                    <div class="mb-3">
                        <label for="title">Название</label>
                        <input
                            v-model="product.title"
                            type="text"
                            id="title"
                            placeholder="Название"
                            class="form-control"
                            :class="{ 'is-invalid': errors.title }"
                        />
                        <div v-if="errors.title" class="invalid-feedback">
                            {{ errors.title.join(", ") }}
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="price">Цена продукта</label>
                        <input
                            v-model="product.price"
                            type="number"
                            id="price"
                            placeholder="Цена"
                            class="form-control"
                            :class="{ 'is-invalid': errors.price }"
                        />
                        <div v-if="errors.price" class="invalid-feedback">
                            {{ errors.price.join(", ") }}
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="price">Количество продукта</label>
                        <input
                            v-model="product.quantity"
                            type="number"
                            id="price"
                            placeholder="Количество"
                            class="form-control"
                            :class="{ 'is-invalid': errors.quantity }"
                        />
                        <div v-if="errors.quantity" class="invalid-feedback">
                            {{ errors.quantity.join(", ") }}
                        </div>
                    </div>
                    <div class="mb-3" v-if="product.photo">
                        <img
                            :src="'storage/' + product.photo"
                            class="object-fit-sm-contain border rounded"
                            alt=""
                        />
                    </div>
                    <div class="mb-3">
                        <label for="price">Фото</label>
                        <div class="custom-file">
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <span
                                        class="input-group-text"
                                        id="inputGroupFileAddon01"
                                        >Загрузка</span
                                    >
                                </div>
                                <div class="custom-file">
                                    <input
                                        type="file"
                                        class="custom-file-input"
                                        id="photo"
                                        :class="{ 'is-invalid': errors.photo }"
                                        aria-describedby="inputGroupFileAddon01"
                                    />

                                    <label class="custom-file-label" for="photo"
                                        >Выбрать файл</label
                                    >
                                </div>
                            </div>
                        </div>
                        <div v-if="errors.photo" class="invalid-feedbacks">
                            {{ errors.photo.join(", ") }}
                        </div>
                    </div>

                    <div class="mb-3">
                        <label for="price">Категория</label>
                        <select
                            v-model="product.category.id"
                            class="custom-select mr-sm-2"
                            :class="{ 'is-invalid': errors.category_id }"
                            id="role"
                        >
                            <option
                                v-for="category in categories"
                                :value="category.id"
                            >
                                {{ category.name }}
                            </option>
                        </select>
                        <div v-if="errors.category_id" class="invalid-feedback">
                            {{ errors.category_id.join(", ") }}
                        </div>
                    </div>

                    <div>
                        <label for="description">Описание</label>
                        <textarea
                            v-model="product.description"
                            class="form-control"
                            id="description"
                            placeholder="Описание"
                            :class="{ 'is-invalid': errors.description }"
                        ></textarea>
                        <div v-if="errors.description" class="invalid-feedback">
                            {{ errors.description.join(", ") }}
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button
                        type="button"
                        @click="CreateUpdateProduct()"
                        class="btn theme-btn p-2 w-100"
                    >
                        Сохранить
                    </button>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal Del -->
    <div
        class="modal fade"
        id="delModal"
        tabindex="-1"
        aria-labelledby="delModalLabel"
        aria-hidden="true"
    >
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="delModalLabel">
                        Удаление продукта
                    </h5>
                    <button
                        id="delm"
                        type="button"
                        class="close"
                        data-dismiss="modal"
                        aria-label="Close"
                    >
                        <span aria-hidden="true"
                            ><i class="bi bi-x-square"></i
                        ></span>
                    </button>
                </div>
                <div class="modal-body">
                    Удалить продукт {{ product.title }}?
                </div>
                <div class="modal-footer">
                    <button
                        type="button"
                        @click="DelProducts(product.id)"
                        class="btn theme-btn p-2 w-100"
                    >
                        Удалить
                    </button>
                </div>
            </div>
        </div>
    </div>

    <div class="p-3">
        <button
            @click="ClearProduct()"
            class="btn theme-btn p-2 pr-5"
            data-toggle="modal"
            data-target="#exampleModal"
        >
            <i class="bi bi-patch-plus"></i> Добавить товар
        </button>
    </div>

    <table class="table">
        <thead>
            <tr>
                <th scope="col">ID</th>
                <th scope="col">Название</th>
                <th scope="col">Описание</th>
                <th scope="col">Цена</th>
                <th scope="col">Категория</th>
                <th scope="col">Действия</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="product in products">
                <td>{{ product.id }}</td>
                <td>{{ product.title }}</td>
                <td>{{ product.description }}</td>
                <td>{{ product.price }}$</td>
                <td>{{ product.category.name }}</td>
                <td>
                    <div class="btn-group">
                        <button
                            class="btn theme-btn p-2 pr-5"
                            data-toggle="modal"
                            data-target="#exampleModal"
                            @click="GetProduct(product.id)"
                        >
                            <i class="bi bi-pencil"></i>
                        </button>
                        <button
                            class="btn theme-btn p-2 pr-5"
                            data-toggle="modal"
                            data-target="#delModal"
                            @click="GetProduct(product.id)"
                        >
                            <i class="bi bi-trash3"></i>
                        </button>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</template>
<script>
export default {
    name: "ControlProductsComponent",
    props: ["server"],
    data() {
        return {
            products: [],
            product: {
                title: "",
                description: "",
                price: "",
                quantity: "",
                category: {
                    id: "",
                },
            },
            categories: [],
            errors: {},
        };
    },

    mounted() {
        this.GetCategories();
    },

    methods: {
        GetCategories() {
            this.server("/categories")
                .then((result) => {
                    this.categories = result.categories;
                    this.GetProducts();
                })
                .catch((error) => console.error(error));
        },

        ClearProduct() {
            this.product = {
                title: "",
                description: "",
                price: "",
                quantity: "",
                category: {
                    id: "",
                },
            };
        },

        GetProduct(id) {
            this.server("/products/" + id)
                .then((result) => {
                    this.product = result.product;
                })
                .catch((error) => console.error(error));
        },

        GetProducts() {
            this.server("/products")
                .then((result) => {
                    this.products = result.products;
                })
                .catch((error) => console.error(error));
        },

        DelProducts(id) {
            this.server("/products/" + id, "DELETE")
                .then((result) => {
                    this.GetProducts();
                    document.querySelector("#delm").click();
                    this.ClearProduct();
                })
                .catch((error) => console.error(error));
        },

        CreateUpdateProduct() {
            let photo = document.querySelector("#photo");
            let formdata = new FormData();
            formdata.append("title", this.product.title);
            formdata.append("description", this.product.description);
            formdata.append("price", this.product.price);
            formdata.append("quantity", this.product.quantity);
            if (photo.files[0]) {
                formdata.append("photo", photo.files[0]);
            }
            formdata.append("category_id", this.product.category.id);
            this.server(
                this.product.id ? "/products/" + this.product.id : "/products",
                this.product.id ? "PATCH" : "POST",
                formdata,
            )
                .then((result) => {
                    if (result.errors) {
                        this.errors = result.errors;
                    } else {
                        this.GetProducts();
                        document.querySelector("#upcrm").click();
                        this.ClearProduct();
                    }
                })
                .catch((error) => console.error(error));
        },
    },
};
</script>
