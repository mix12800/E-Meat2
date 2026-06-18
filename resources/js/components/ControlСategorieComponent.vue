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
                        <template v-if="category.id">Редактирование</template>
                        <template v-else>Создание</template>
                        категории
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
                    <div>
                        <label for="name">Имя категории</label>
                        <input
                            v-model="category.name"
                            type="text"
                            id="name"
                            placeholder="Имя категории"
                            class="form-control"
                            :class="{ 'is-invalid': errors.name }"
                        />
                        <div
                            v-if="errors.name"
                            id="validationServerUsernameFeedback"
                            class="invalid-feedback"
                        >
                            {{ errors.name.join(", ") }}
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button
                        @click="CreateUpdateCategory()"
                        type="button"
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
                        Удаление категории
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
                    Удалить категорию {{ category.name }}?
                </div>
                <div class="modal-footer">
                    <button
                        @click="DelCategory(category.id)"
                        type="button"
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
            @click="ClearCategory()"
            class="btn theme-btn p-2 pr-5"
            data-toggle="modal"
            data-target="#exampleModal"
        >
            <i class="bi bi-patch-plus"></i> Добавить категорию
        </button>
    </div>

    <table class="table">
        <thead>
            <tr>
                <th scope="col">ID</th>
                <th scope="col">Название</th>
                <th scope="col">Действия</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="category in categories">
                <td>{{ category.id }}</td>
                <td>{{ category.name }}</td>
                <td>
                    <div class="btn-group">
                        <button
                            class="btn theme-btn p-2 pr-5"
                            data-toggle="modal"
                            @click="GetCategory(category.id)"
                            data-target="#exampleModal"
                        >
                            <i class="bi bi-pencil"></i>
                        </button>
                        <button
                            class="btn theme-btn p-2 pr-5"
                            data-toggle="modal"
                            data-target="#delModal"
                            @click="GetCategory(category.id)"
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
import { error } from "jquery";

export default {
    name: "ControlСategorieComponent",
    props: ["server"],
    data() {
        return {
            categories: [],
            category: {},
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
                })
                .catch((error) => console.error(error));
        },

        ClearCategory() {
            this.category = {};
        },

        GetCategory(id) {
            this.server("/categories/" + id)
                .then((result) => {
                    this.category = result.Category;
                })
                .catch((error) => console.error(error));
        },

        CreateUpdateCategory() {
            let formdata = new FormData();
            if(this.category.name)formdata.append("name", this.category.name);
            this.server(
                this.category.id
                    ? "/categories/" + this.category.id
                    : "/categories",
                this.category.id ? "PATCH" : "POST",
                formdata,
            )
                .then((result) => {
                    if (result.errors) {
                        this.errors = result.errors;
                    } else {
                        this.errors = {};
                        this.GetCategories();
                        document.querySelector("#upcrm").click();
                        this.ClearCategory();
                    }
                })
                .catch((error) => console.error(error));
        },

        DelCategory(id) {
            this.server("/categories/" + id, "DELETE")
                .then((result) => {
                    this.GetCategories();
                    document.querySelector("#delm").click();
                    this.category = {};
                })
                .catch((error) => console.error(error));
        },
    },
};
</script>
