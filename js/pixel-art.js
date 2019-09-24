var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');

colorPersonalizado.addEventListener('change', 
  (function() {
    // Se guarda el color de la rueda en colorActual
    colorActual = colorPersonalizado.value;
    // Completar para que cambie el indicador-de-color al colorActual
    cambiarColorIndicado(colorActual);
  })
);

// Mis variables Globales
var grillaPixeles = $('#grilla-pixeles');
var paleta = $('#paleta');
var clickApretado = false;

// Mis funciones
function cambiarColorIndicado(color)
{
  $('#indicador-de-color').css('background-color', color);
}

function crearPaletaDeColores()
{
  for (var i = 0; i < nombreColores.length; i++)
  {
     var color = $(document.createElement('div'));
     
     color.addClass('color-paleta');    
     color.css('background-color', nombreColores[i]);
     color.click(function() {
       var backgroundColor = $(this).css('background-color');
       cambiarColorIndicado(backgroundColor);
     });

     paleta.append(color);
  }
} 

function pintar() 
{
  // Agregar if para que no pinte cuando no se seleccione ningun color
  var selectedColor = $('#indicador-de-color').css('background-color');
  $(this).css('background-color', selectedColor);
}

function crearGrillaPixeles()
{
  for (var i = 0; i < 1750; i++)
  {
    var pixel = $(document.createElement('div'));

    pixel.click(pintar);    

    pixel.hover(function() {
      if(clickApretado)
      {
        // TODO refactorizar en la funcion pintar
        var selectedColor = $('#indicador-de-color').css('background-color');
        $(this).css('background-color', selectedColor);
      }
    });

    grillaPixeles.append(pixel);
  }
}

// Se encarga de borrar todos los pixeles de la grilla al hacer click en el boton
$('#borrar').click(function() {
  $('#grilla-pixeles div').each(function(pixel) {
    $(this).animate({ 'background-color': 'white'}, 'slow');
  })
});

// Cargar un Superheroe en la grilla de pixeles
$('#batman').click(function() {
  cargarSuperheroe(batman);
});

$('#wonder').click(function() {
  cargarSuperheroe(wonder);
});

$('#flash').click(function() {
  cargarSuperheroe(flash);
});

$('#invisible').click(function() {
  cargarSuperheroe(invisible);
});

// Guardar grilla de pixeles como una imagen
$('#guardar').click(function() {
  guardarPixelArt();
});

// Crear componentes del Proyecto
crearPaletaDeColores();
crearGrillaPixeles();

$('body').mousedown(function() { clickApretado = true; });
$('body').mouseup(function() { clickApretado = false; });