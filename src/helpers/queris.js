const api_productos = import.meta.env.VITE_API_PRODUCTOS;
const api_producto = import.meta.env.VITE_API_PRODUCTO;
const api_pedidos = import.meta.env.VITE_API_PEDIDOS;
const api_usuarios = import.meta.env.VITE_API_USUARIOS;

// deco del _id del usuario

const jwtCompleto = JSON.parse(localStorage.getItem("usuarioSazonDelAlma"))||[];

let uid
const uidUsuario =()=>{
  const jwt = jwtCompleto.token;
  if (jwt !== undefined){
    const payloadBase64 = jwt.split(".")[1];
    const payload = JSON.parse(atob(payloadBase64));
  
     uid = payload.uid;
     return uid;
  }
  
}


//mostrar todos los productos
export const leerProductosAPI = async () => {
  try {
    const datita = await fetch(api_productos);
    const listaProductos = await datita.json();
    return listaProductos;
  } catch (error) {
    console.error(error);
  }
};
export const obtenerProductoAPI = async (id) => {
  try {
    const respuesta = await fetch(api_producto + "/" + id);
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

export const productosOfertaAPI = async () => {
  try {
    const datita = await fetch(api_productos);
    const listaProductos = await datita.json();
    let destacados = listaProductos.filter(
      (producto) => producto.estado == "En oferta"
    );

    return destacados;
  } catch (error) {
    console.error(error);
  }
};
export const pedidosUsuario = async (token) => {
  if(token !== ""){
    try {
      const datita = await fetch(api_pedidos , {
        headers: {
          "x-token" : token
        }
      });
      const listaPedidoUsuario = await datita.json();
      return listaPedidoUsuario;
    } catch (error) {
      console.error(error);
    }
  }else{
    return []
  }
};
export const productosCategoriaAPI = async (categoria) => {
  try {
    const datita = await fetch(api_productos);
    const listaProductos = await datita.json();
    let destacados = listaProductos.filter(
      (producto) => producto.categoria === categoria
    );

    return destacados;
  } catch (error) {
    console.error(error);
  }
};

export const crearProductoAPI = async (productoNuevo) => {
  try {
    const respuesta = await fetch(api_productos, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productoNuevo),
    });

    return respuesta;
  } catch (error) {
    console.error(error);
  }
};

export const borrarPlatoAPI = async (id) => {
  try {
    const respuesta = await fetch(`${api_producto}/${id}`, {
      method: "DELETE",
    });
    return respuesta;
  } catch (error) {
    console.error(error);
  }
};

export const modificarProductoAPI = async (productoModificado, id) => {
  try {
    const respuesta = await fetch(`${api_producto}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productoModificado),
    });
    return respuesta;
  } catch (error) {
    console.error(error);
  }
};

export const crearPedidoAPI = async (pedido, token) => {
  const enviarPedido = {
    producto: [pedido],
    estado: "Pendiente"
  };
  try {
    const respuesta = await fetch(api_pedidos, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-token": token
      },
      body: JSON.stringify(enviarPedido),
    });
    const data = await respuesta.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const leerPedidoAPI = async () => {
  try {
    const respuesta = await fetch(api_pedidos , {
      headers: {
        "x-token": token
      }
    });
    const listaPedido = await respuesta.json();
    return [listaPedido, respuesta.status];
  } catch (error) {
    console.log(error);
  }
};

export const modificarPedidoAPI = async (pedidoModificado, id) => {
  try {
    const respuesta = await fetch(`${api_pedidos}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(pedidoModificado),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

export const borrarPedidoAPI = async (id) => {
  try {
    const respuesta = await fetch(`${api_pedidos}/${id}`, {
      method: "DELETE",
      headers: {
        "x-token": JSON.parse(localStorage.getItem("usuarioSazonDelAlma"))
          .token,
      },
    });
    return respuesta;
    console.log(respuesta);
  } catch (error) {
    console.error(error);
  }
};

export const leerUsuarios = async () => {
  try {
    const respuesta = await fetch(`${api_usuarios}usuarios`);
    const data = await respuesta.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const borrarUsuarios = async (email) => {
  try {
    const respuesta = await fetch(`${api_usuarios}borrarUsuario`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(email),
    });
    const data = await respuesta.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const suspenderUsuarios = async (email) => {
  try {
    const respuesta = await fetch(`${api_usuarios}suspenderUsuario`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(email),
    });
    const data = await respuesta.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const habilitarUsuarios = async (email) => {
  try {
    const respuesta = await fetch(`${api_usuarios}habilitarUsuario`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(email),
    });
    const data = await respuesta.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const crearUsuariosAdmin = async (usuario) => {
  try {
    const respuesta = await fetch(`${api_usuarios}registroAdmin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuario),
    });
    return respuesta;
  } catch (error) {
    console.error(error);
  }
};

export const crearUsuario = async (usuario) => {
  try {
    const respuesta = await fetch(`${api_usuarios}registrar`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuario),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

export const login = async (usuario) => {
  try {
    const respuesta = await fetch(`${api_usuarios}login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuario),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

export const logoutBack = async (usuario) => {
  try {
    const respuesta = await fetch(`${api_usuarios}logout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuario),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

export const isRol = async (usuario) => {
  try {
    const respuesta = await fetch(`${api_usuarios}isAdmin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuario),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};
