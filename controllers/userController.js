const User = require("../models/User");
const { use } = require("../routes/user");


exports.crearUser = async (req,res) => {
  try {

    let user;
    
    //Creando usuario

    user = new User(req.body);

    await user.save();
    res.send(user);


    
  } catch (error) {
    
    console.log(error);
    res.status(500).send('Se presento un error');    
  
  }
}

exports.obtenerUsers = async(req,res) => {
  try {
    
    const user = await User.find();
    res.json(user);

  } catch (error) {
    console.log(error);
    res.status(500).send('Se presento un error');
  }
}

exports.actualizarUser = async(req,res) => {
  try {
    
    const {ciudad, contrasena, correoElectronico, direccion,
      nombreOrganizacion, numeroDocumento, numeroTelefono1,
      numeroTelefono2, pais, primerApellido, primerNombre,
      sector, segundoApellido, segundoNombre, tipoDocumento,
      tipoUsuario } = req.body;
    
    let user = await User.findById(req.params.id);

    if(!user){
      res.status(404).json({msg: "No existe el Usuario"});
    }

    user.ciudad = ciudad;
    user.contrasena = contrasena;
    user.correoElectronico = correoElectronico;
    user.direccion = direccion;
    user.nombreOrganizacion = nombreOrganizacion;
    user.numeroDocumento = numeroDocumento;
    user.numeroTelefono1 = numeroTelefono1;
    user.numeroTelefono2 = numeroTelefono2;
    user.pais = pais;
    user.primerApellido = primerApellido;
    user.primerNombre = primerNombre;
    user.sector = sector;
    user. segundoApellido = segundoApellido;
    user.segundoNombre = segundoNombre;
    user.tipoDocumento = tipoDocumento;
    user.tipoUsuario = tipoUsuario;

    user = await User.findByIdAndUpdate({ _id: req.params.id}, user, {new:true});
    res.json(user);
    
  } catch (error) {
    console.log(error);
    res.status(500).send('Se presento un error');
  }
}

exports.obtenerUser = async (req,res) => {
  try {
  
    let user = await User.findById(req.params.id);

    if(!user) {
      res.status(404).json({msg: 'No existe el usuario'});
    }

    res.json(user);

  } catch (error) {

    console.log(error);
    res.status(500).send('Se presento un error');
  
  }
}

exports.borrarUser = async (req,res) => {
  try {
  
    let user = await User.findById(req.params.id);

    if(!user) {
      res.status(404).json({msg: 'No existe el usuario'});
    }

    await User.findOneAndRemove({ _id: req.params.id });
    res.json({ msg: 'Usuario Borrado Existosamente'});
    
  } catch (error) {

    console.log(error);
    res.status(500).send('Se presento un error');
  
  }
}