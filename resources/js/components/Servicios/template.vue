<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">Lista de Servicios de Productos</div>
                    <v-form>
                        <v-toolbar flat>
                            <v-spacer></v-spacer>
                            <v-text-field
                                label="Buscar"
                                :disabled="busy"
                                v-on:keyup="find"
                                v-model="search"
                                color="dark"
                                hide-details
                                outlined
                                dense
                            ></v-text-field>

                            <v-spacer></v-spacer>
                        </v-toolbar>
                    </v-form>
                     <div class="col-md-6">
                     Ordenar <select class='form-control'   v-on:change="orden(order)" v-model='order'>
                               <option value='asc' >Ordenar por ID</option>
                               <option value='desc' >Mostrar Todo</option>
                            </select>
                             </div>
                   

                    <div class="card-body">
                        <button
                            class="btn btn-success"
                            data-toggle="modal"
                            @click.prevent="showproducto(producto)"
                        >
                            <i class="fas fa-plus"></i>
                            Nuevo Servicio de Producto
                        </button>
                    </div>

                    <div class="card-body">
                        <table class="table table-hover" id="table">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Nombre</th>
                                    <th scope="col">Precio</th>
                                     <th scope="col">Variaciones</th>
                                    <th scope="col">Categorias</th>
                                    <th scope="col">Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="producto in productos" :key="producto.id">
                                  
                                    <td>{{producto.id }}</td>
                                    <td>{{ producto.nombre }}</td>
                                     <td>{{ producto.precio }}</td>
                                      <td>{{ producto.variaciones }}</td>
                                       <td>{{ producto.categoria }}</td>
                                   

                                    <td
                                        @click="showproducto(producto)"
                                        class="btn btn-info table-active"
                                    >
                                        <i class="far fa-edit"></i>
                                    </td>
                                    <td
                                        @click.prevent="deleteproducto(producto)"
                                        class="btn btn-danger table-active"
                                    >
                                        <i class="fas fa-trash-alt"></i>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <v-pagination
                        v-model="pagination.current"
                        :length="pagination.total"
                        @input="onPageChange"
                    ></v-pagination>
                </div>
            </div>
        </div>

        <!-- Moda Carga de Datos -->

        <div id="myModalcarga" class="modal fade" role="dialog">
            <div class="modal-dialog modal-lg modal-dialog-centered">
                <!-- Modal content-->
                <div class="modal-content">
                    <h5 class="modal-title" id="Cargar Bancos">
                        &nbsp;&nbsp;&nbsp; Información del Servicio
                    </h5>
                    <div class="modal-header">
                        <form class="row g-3" id="miForm" ref="textareaform">
                              <input type="hidden" v-model="form.status" />
                            <input type="hidden" v-model="form.id" />
                            <div class="col-md-3">
                                <label
                                    for="validationDefault02"
                                    class="form-label"
                                    >Nombre</label
                                >
                                <input
                                    type="text"
                                   
                                    id="nombre"
                                    placeholder="Introduzca nombre"
                                    v-model="form.nombre"
                                    required
                                />
                            </div>
                            <div class="col-md-3">
                                <label
                                    for="validationDefault02"
                                    class="form-label"
                                    >Precio</label
                                >
                                <input
                                    type="text"
                                   
                                    id="precio"
                                    placeholder="Introduzca Precio"
                                    v-model="form.precio"
                                    required
                                />
                            </div>
                            <div class="col-md-3">
                                <label
                                    for="validationDefault02"
                                    class="form-label"
                                    >Variaciones</label
                                >
                                <input
                                    type="text"
                                   
                                    id="precio"
                                    placeholder="Introduzca Varaciones"
                                    v-model="form.variaciones"
                                    required
                                />
                            </div>
                            <div class="col-md-3">
                                <label
                                    for="validationDefault02"
                                    class="form-label"
                                    >Categoria</label
                                >
                                <input
                                    type="text"
                                   
                                    id="precio"
                                    placeholder="Introduzca Categoria"
                                    v-model="form.categoria"
                                    required
                                />
                            </div>

                            

                            
                            <br />
                            <br />
                            <br />
                            <div class="col-md-12">
                                <button
                                    class="btn btn-success"
                                    @click.prevent="Addproducto()"
                                >
                                    Guardar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script src="./script.js"></script>
