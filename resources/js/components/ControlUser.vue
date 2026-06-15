<template>
    <div class="modal-fon">
        <div class="modal-i">
            <div class="mb-3">
                <label for="name" class="form-label">Имя</label>
                <input
                    type="text"
                    id="name"
                    class="form-control"
                    placeholder="Имя"
                    v-model="user.name"
                />
            </div>
            <div class="mb-3">
                <label for="name" class="form-label">Почта</label>
                <input
                    type="text"
                    class="form-control"
                    placeholder="Почта"
                    v-model="user.email"
                />
            </div>
            <div class="mb-3">
                <label for="name" class="form-label">Логин</label>
                <input
                    type="text"
                    class="form-control"
                    placeholder="Логин"
                    v-model="user.login"
                />
            </div>
            <div class="mb-3">
                <label for="name" class="form-label">Пароль</label>
                <input
                    type="password"
                    class="form-control"
                    placeholder="Пароль"
                    v-model="user.password"
                />
            </div>
            <div class="mb-3">
                <label for="name" class="form-label">Роль</label>
                <select v-model="user.role" class="form-control">
                    <option value="user" :selected="user.role == 'user'">
                        пользователь
                    </option>
                    <option value="manager" :selected="user.role == 'manager'">
                        Менеджер
                    </option>
                    <option value="admin" :selected="user.role == 'admin'">
                        Администратор
                    </option>
                </select>
            </div>
            <div class="mb-3">
                <button @click="UpdateUser(user.id)" class="theme-btn p-2 pr-5 w-100">
                    <i class="bi bi-floppy"></i> Сохранить измениния
                </button>
            </div>
            <div>
                <button class="theme-dark-btn p-2" @click="ModelToggle()">
                    Отмена
                </button>
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
                            ? "пользователь"
                            : user.role == "admin"
                              ? "Администратор"
                              : "Менеджер"
                    }}
                </td>
                <td>
                    <button
                        class="btn theme-btn p-2 pr-5"
                        @click="GetUser(user.id)"
                    >
                        <i class="bi bi-pencil"></i> Редактировать
                    </button>
                </td>
            </tr>
        </tbody>
    </table>
</template>
<script>
export default {
    name: "ControlUser",
    props: ["server"],
    data() {
        return {
            users: [],
            user: {},
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
                    this.ModelToggle();
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
                    this.GetUsers();
                    this.ModelToggle();
                })
                .catch((error) => console.error(error));
        },

        ModelToggle() {
            document.body.classList.toggle("body-model");
        },
    },
};
</script>
