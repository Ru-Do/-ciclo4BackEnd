const Publicacion = require("../models/Publicacion");
const { use } = require("../routes/publicacion");


exports.crearPublicacion = async (req,res) => {
  try {

    let publicacion;
    
    //Creando usuario

    publicacion = new Publicacion(req.body);

    await publicacion.save();
    res.send(publicacion);


    
  } catch (error) {
    
    console.log(error);
    res.status(500).send('Se presento un error');    
  
  }
}

exports.obtenerPublicaciones = async(req,res) => {
  try {
    
    const publicacion = await Publicacion.find();
    res.json(publicacion);

  } catch (error) {
    console.log(error);
    res.status(500).send('Se presento un error');
  }
}

/*
exports.probarLogin = async(req,res) => {
  try {
    const {correoElectronico, contrasena} = req.body;
    const login = await User.findOne({correoElectronico});
    if (!login) return res.status(401).send("no existe correo");
    if (login.contrasena !== contrasena) return res.status(401).send('Wrong Password');
    (res.json({login}));

  } catch (error) {
    console.log(error);
    res.status(500).send('Se presento un error');
  }
}
*/

exports.actualizarPublicacion = async(req,res) => {
  try {
    
    const {sector,fechaInicio,fechaFin,descripcion,idDueno,
      tipoDona,nivelAcademico} = req.body;
    
    let publicacion = await Publicacion.findById(req.params.id);

    if(!publicacion){
      res.status(404).json({msg: "No existe el Usuario"});
    }

    publicacion.sector = sector;
    publicacion.fechaInicio = fechaInicio;
    publicacion.fechaFin = fechaFin;
    publicacion.descripcion = descripcion;
    publicacion.idDueno = idDueno;
    publicacion.tipoDona = tipoDona;
    publicacion.nivelAcademico = nivelAcademico;

    publicacion = await Publicacion.findByIdAndUpdate({ _id: req.params.id}, Publicacion, {new:true});
    res.json(Publicacion);
    
  } catch (error) {
    console.log(error);
    res.status(500).send('Se presento un error');
  }
}

exports.obtenerPublicacion = async (req,res) => {
  try {
  
    let publicacion = await Publicacion.findById(req.params.id);

    if(!publicacion) {
      res.status(404).json({msg: 'No existe la publicacion'});
    }

    res.json(publicacion);

  } catch (error) {

    console.log(error);
    res.status(500).send('Se presento un error');
  
  }
}

exports.borrarPublicacion = async (req,res) => {
  try {
  
    let publicacion = await Publicacion.findById(req.params.id);

    if(!publicacion) {
      res.status(404).json({msg: 'No existe la publicacion'});
    }

    await Publicacion.findOneAndRemove({ _id: req.params.id });
    res.json({ msg: 'Publicacion Borrada Existosamente'});
    
  } catch (error) {

    console.log(error);
    res.status(500).send('Se presento un error');
  
  }
}