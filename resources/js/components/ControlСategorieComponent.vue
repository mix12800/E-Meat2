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
                        Создание категории
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
                    <!-- пвпыв -->
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
                <div class="modal-body">Удалить категорию ?</div>
                <div class="modal-footer">
                    <button type="button" class="btn theme-btn p-2 w-100">
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
                <th scope="col">Название</th>
                <th scope="col">Действия</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="Category in categories">
                <td>
                    <div class="btn-group">
                        <button
                            class="btn theme-btn p-2 pr-5"
                            data-toggle="modal"
                            data-target="#exampleModal"
                        >
                            <i class="bi bi-pencil"></i>
                        </button>
                        <button
                            class="btn theme-btn p-2 pr-5"
                            data-toggle="modal"
                            data-target="#delModal"
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
    name: "ControlСategorieComponent",
    props: ["server"],
    data() {
        return {
            categories: [],
        };
    },
    methods: {},
};
</script>
