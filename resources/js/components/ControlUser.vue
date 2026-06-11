<template>
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
                    <div class="btn-group">
                        <button class="btn btn-secondary">
                            <i class="bi bi-pencil"></i>
                        </button>
                        <button class="btn btn-danger">
                            <i class="bi bi-trash"></i>
                        </button>
                    </div>
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
    },
};
</script>
