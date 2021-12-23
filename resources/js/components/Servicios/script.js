export default {
    data() {
        return {
            productos: {},
            producto:null,
          

            dialog: null,
           
            showModal: false,
            rout: "",
            form: {
                status: "0",
                id: "",
               nombre:"",
               precio:"",
               categoria:"",
               variaciones:"",
               
            },
            order:null,
            datos: null,
            busy: false,
            search: null,
            errors: [],
            pagination: {
                current: 1,
                total: 0
            }
        };
    },

    computed: {},
    created: function() {
       
        this.allproducto();
    },
    mounted() {
      
        this.allproducto();
    },
    methods: {
        deleteproducto(producto) {
            var _this = this;
            swal.fire({
                title: 'Estas seguro que quiere eliminar esta informacion',
                text: "Este proceso no puede ser revertido",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si, eliminar!'
              }).then((result) => {
                if (result.isConfirmed) {
                   
                swal.fire({
                   
                   title: 'La informacion ha sido eliminada.',
                    icon: 'success',
                    timer: 2200,
                    showConfirmButton: false,
                 } )
                  axios
                  .delete("/deleteproducto/" + producto.id)
                  .then(function(response) {
                      _this.allproducto();
                  })
                }
              })

            
           },

           Addproducto() {
            var _this = this;

            if (this.form.status == "1") {
                this.rout = "/Addproducto";
            } else {
                this.rout = "/editproducto/" + this.form.id;
            }
            axios.post(this.rout, this.form).then(function(response) {
                  swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Servicio guardado con exito',
                    showConfirmButton: false,
                    timer: 2000
                  })
              
                    _this.form.nombre = _this.form.nombre =  "";
                    _this.form.precio = _this.form.nombre =  "";
                    _this.form.categora = _this.form.categoria =  "";
                    _this.form.variaciones = _this.form.variaciones =  "";
                    $("#myModalcarga").modal("hide");
                    _this.allproducto();
              
            });
        },

        showproducto(producto) {
          
           this.form.status = "1";
          if (this.form.status) {
              this.form.email = "";
              this.form.password = "";
            
        }

            if (producto) {
                this.form.status = "0";
                this.form.nombre = producto.nombre;
                this.form.precio = producto.precio;
                this.form.variaciones = producto.variaciones;
                this.form.categoria = producto.categoria;
                this.form.id = producto.id;
                
            }

            $("#myModalcarga").modal("show");
        },
        allproducto() {
       
            axios
                .post(
                    "/allproductos?page=" + this.pagination.current,

                    {
                        params: {
                            search: this.search
                        }
                    }
                )
                .then(response => {
                    this.productos = response.data.data;
                    this.pagination.current = response.data.current_page;
                    this.pagination.total = response.data.last_page;
                });
        },
        
        onPageChange() {
          
            this.allproducto();
        },

        find() {
            this.wait = true;
            this.page = 1;
            this.total = 0;
          
            this.allproducto();
            this.wait = false;
        },
        orden(order) {
          
            axios
            .post(
                "/allorden?page=" + this.pagination.current,

                {
                    params: {
                        search: order
                    }
                }
            )
            .then(response => {
                this.productos = response.data.data;
                this.pagination.current = response.data.current_page;
                this.pagination.total = response.data.last_page;
            });
        },
        modal_carga() {
            this.modal = true;
        }
    }
};
