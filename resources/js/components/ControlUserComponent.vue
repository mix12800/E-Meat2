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
                        Редактирование пользователя: {{ user.name }}
                    </h5>
                    <button
                        id="upm"
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
                        <label for="name">Имя</label>
                        <input
                            id="name"
                            v-model="user.name"
                            type="text"
                            class="form-control"
                            :class="{ 'is-invalid': errors.name }"
                        />
                        <div v-if="errors.name && errors" class="invalid-feedback">
                            {{ errors.name.join(", ") }}
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="email">Почта</label>
                        <input
                            id="email"
                            v-model="user.email"
                            type="text"
                            class="form-control"
                            :class="{ 'is-invalid': errors.email }"
                        />
                        <div v-if="errors.email" class="invalid-feedback">
                            {{ errors.email.join(". ") }}
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="login">Логин</label>
                        <input
                            id="login"
                            v-model="user.login"
                            type="text"
                            class="form-control"
                            :class="{ 'is-invalid': errors.login }"
                        />
                        <div v-if="errors.login" class="invalid-feedback">
                            {{ errors.login.join(". ") }}
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="password">Пароль</label>
                        <input
                            id="password"
                            v-model="user.password"
                            type="text"
                            class="form-control"
                        />
                    </div>
                    <div class="mb-3">
                        <label for="role">Роль</label>
                        <select
                            v-model="user.role"
                            class="custom-select mr-sm-2"
                            id="role"
                        >
                            <option value="user">Пользователь</option>
                            <option value="manager">Менеджер</option>
                            <option value="admin">Администратор</option>
                        </select>
                    </div>
                </div>
                <div class="modal-footer">
                    <button
                        @click="UpdateUser(user.id)"
                        type="button"
                        class="btn theme-btn p-2 w-100"
                    >
                        Сохранить изменения
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
                        Удаление пользователя
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
                    Удалить пользователя {{ user.name }}?
                </div>
                <div class="modal-footer">
                    <button
                        @click="DelUser(user.id)"
                        type="button"
                        class="btn theme-btn p-2 w-100"
                    >
                        Удалить
                    </button>
                </div>
            </div>
        </div>
    </div>

    <table class="table">
        <thead>
            <tr>
                <th scope="col">ID</th>
                <th scope="col">Имя</th>
                <th scope="col">Почта</th>
                <th scope="col">Логин</th>
                <th scope="col">Роль</th>
                <th scope="col">Действия</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="user in users">
                <th>{{ user.id }}</th>
                <td>{{ user.name }}</td>
                <td>{{ user.email }}</td>
                <td>{{ user.login }}</td>
                <td>
                    {{
                        user.role == "user"
                            ? "Пользователь"
                            : user.role == "admin"
                              ? "Администратор"
                              : "Менеджер"
                    }}
                </td>
                <td>
                    <div class="btn-group">
                        <button
                            class="btn theme-btn p-2 pr-5"
                            data-toggle="modal"
                            data-target="#exampleModal"
                            @click="GetUser(user.id)"
                        >
                            <i class="bi bi-pencil"></i>
                        </button>
                        <button
                            class="btn theme-btn p-2 pr-5"
                            data-toggle="modal"
                            data-target="#delModal"
                            @click="GetUser(user.id)"
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
    name: "ControlUser",
    props: ["server"],
    data() {
        return {
            users: [],
            user: {
                name: "",
                email: "",
                login: "",
                password: "",
                role: "",
            },
            errors: [],
        };
    },

    mounted() {
        this.GetUsers();
    },

    methods: {
        GetUsers() {
            this.server("/users")
                .then((result) => {
                    this.users = result.users;
                })
                .catch((error) => console.error(error));
        },

        GetUser(id) {
            this.server("/users/" + id)
                .then((result) => {
                    this.user = result.user;
                })
                .catch((error) => console.error(error));
        },

        UpdateUser(id) {
            let formdata = new FormData();
            formdata.append("name", this.user.name);
            formdata.append("email", this.user.email);
            formdata.append("login", this.user.login);
            formdata.append("password", this.user.password);
            formdata.append("role", this.user.role);
            this.server("/users/" + id, "PATCH", formdata)
                .then((result) => {
                    if (result.errors) {
                        this.errors = result.errors;                        
                    } else {
                        this.GetUsers();
                        document.querySelector("#upm").click();
                        this.user = {};
                    }
                })
                .catch((error) => console.error(error));
        },

        DelUser(id) {
            this.server("/users/" + id, "DELETE")
                .then((result) => {
                    this.GetUsers();
                    document.querySelector("#delm").click();
                    this.user = {};
                })
                .catch((error) => console.error(error));
        },
    },
};
</script>
