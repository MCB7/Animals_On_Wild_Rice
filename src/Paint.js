import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import rough from "roughjs/bundled/rough.esm";
import './Create-style.css'
import './create-style.scss'
import rice from "./Assets/rice_01.png"

import pencil from "./Assets/pen_icon.svg"
import palette from "./Assets/palette_icon.svg"
import thickness from './Assets/thickness_icon.svg'
import circle from './Assets/circle_icon.svg'
import circleHeight from './Assets/height_icon.svg'
import circleWidth from './Assets/width_icon.svg'
import square from './Assets/square_icon.svg'
import squareHeight from './Assets/height_icon.svg'
import squareWidth from './Assets/width_icon.svg'
import fill from './Assets/fill_icon.svg'
import fillStroke from './Assets/fillcolor.svg'
import textureIcon from './Assets/texture_icon.svg'
import layer from './Assets/layer_icon.svg'
import urlIcon from './Assets/url_icon.svg'
import saveIcon from './Assets/save_icon.svg'
import undoIcon from './Assets/undoIcon.svg'
import imgurIcon from './Assets/imgurIcon.svg'
import { useNavigate, Navigate } from "react-router-dom";

import { AnimatePresence, motion, useCycle } from "framer-motion";
import $ from 'jquery'


const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="currentColor"
    strokeLinecap="round"
    {...props}
  />
);

const MenuButton = ({ onClick, isOpen }) => {
    
  
  return (
    <motion.button
      className="menu-button"
      onClick={onClick}
      animate={isOpen ? "open" : "closed"}
      initial={false}
    >
      <svg
        width="23"
        height="23"
        style={{ margin: "4px 0 0 2px" }}
        viewBox="0 0 23 23"
      >
        <Path
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" }
          }}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 }
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" }
          }}
        />
      </svg>
    </motion.button>
  );
};

const ThicknessButton = ({ onClick, isOpen }) => {
    return (
     
      <motion.button onClick={onClick} animate={isOpen ? "open" : "closed"} initial={false} style={{width: 'auto' , height:'6vh', padding: '5px',backgroundColor:'rgb(121, 194, 103)'}}>
         <motion.div whileHover={{ scale: 1 }} whileTap={{ scale: 0.9 }} style={{ x: 0}}>
        <img src={thickness} style={{width: 'auto' , height:'4vh'}} alt=" all stroke thickness" />
        </motion.div>
      </motion.button>
  
 
      );
};

const PaletteButton = ({ onClick, isOpen }) => {
  return (
   
    <motion.button onClick={onClick} animate={isOpen ? "open" : "closed"} initial={false} style={{width: 'auto' , height:'6vh', padding: '5px',backgroundColor:'rgb(121, 194, 103)'}}>
       <motion.div whileHover={{ scale: 1 }} whileTap={{ scale: 0.9 }} style={{ x: 0}}>
      <img src={palette} style={{width: 'auto' , height:'4vh'}} alt=" Color Palette" />
      </motion.div>
    </motion.button>


    );
};

const CircleHeightButton = ({ onClick, isOpen }) => {
  return (
   
    <motion.button onClick={onClick} animate={isOpen ? "open" : "closed"} initial={false} style={{width: 'auto' , height:'6vh', padding: '5px',backgroundColor:'rgb(242, 140, 51) '}}>
      <motion.div whileHover={{ scale: 1 }} whileTap={{ scale: 0.9 }} style={{ x: 0}}>
     <img src={circleHeight} style={{width: 'auto' , height:'4vh'}} alt="circle height" />
      </motion.div> 
    </motion.button>


    );
};

const CircleWidthButton = ({ onClick, isOpen }) => {
  return (
   
    <motion.button onClick={onClick} animate={isOpen ? "open" : "closed"} initial={false} style={{width: 'auto' , height:'6vh', padding: '5px',backgroundColor:'rgb(242, 140, 51) '}}>
      <motion.div whileHover={{ scale: 1 }} whileTap={{ scale: 0.9 }} style={{ x: 0}}>
      <img src={circleWidth} style={{width: 'auto' , height:'4vh'}} alt="circle width" />
      </motion.div> 
    </motion.button>


    );
};


const SquareHeightButton = ({ onClick, isOpen }) => {
  return (
   
    <motion.button onClick={onClick} animate={isOpen ? "open" : "closed"} initial={false} style={{width: 'auto' , height:'6vh', padding: '5px',backgroundColor:'rgb(198, 215, 71)'}}>
      <motion.div whileHover={{ scale: 1 }} whileTap={{ scale: 0.9 }} style={{ x: 0}}>
     <img src={squareHeight} style={{width: 'auto' , height:'4vh'}} alt="square height" />
      </motion.div> 
    </motion.button>


    );
};


const SquareWidthButton = ({ onClick, isOpen }) => {
  return (
   
    <motion.button onClick={onClick} animate={isOpen ? "open" : "closed"} initial={false} style={{width: 'auto' , height:'6vh', padding: '5px',backgroundColor:'rgb(198, 215, 71)'}}>
      <motion.div whileHover={{ scale: 1 }} whileTap={{ scale: 0.9 }} style={{ x: 0}}>
     <img src={squareWidth} style={{width: 'auto' , height:'4vh'}} alt="square height" />
      </motion.div> 
    </motion.button>


    );
};

const ShapeFillColorButton = ({ onClick, isOpen }) => {
  return (
   
    <motion.button onClick={onClick} animate={isOpen ? "open" : "closed"} initial={false} style={{width: 'auto' , height:'6vh', padding: '5px',backgroundColor:'rgb(69, 155, 168)'}}>
      <motion.div whileHover={{ scale: 1 }} whileTap={{ scale: 0.9 }} style={{ x: 0}}>
      <img src={fillStroke} style={{width: 'auto' , height:'4vh'}} alt="fill shape color" />
      </motion.div> 
    </motion.button>


    );
};

const ShapeStrokeColorButton = ({ onClick, isOpen }) => {
  return (
   
    <motion.button onClick={onClick} animate={isOpen ? "open" : "closed"} initial={false} style={{width: 'auto' , height:'6vh', padding: '5px',backgroundColor:'rgb(69, 155, 168)'}}>
      <motion.div whileHover={{ scale: 1 }} whileTap={{ scale: 0.9 }} style={{ x: 0}}>
      <img src={fill} style={{width: 'auto' , height:'4vh'}} alt="shape stroke color" />
      </motion.div> 
    </motion.button>


    );
};

const ShapeTextureButton = ({ onClick, isOpen }) => {
  return (
   
    <motion.button onClick={onClick} animate={isOpen ? "open" : "closed"} initial={false} style={{width: 'auto' , height:'6vh', padding: '5px',backgroundColor:'rgb(69, 155, 168)'}}>
      <motion.div whileHover={{ scale: 1 }} whileTap={{ scale: 0.9 }} style={{ x: 0}}>
      <img src={textureIcon} style={{width: 'auto' , height:'4vh'}} alt="shape stroke color" />
      </motion.div> 
    </motion.button>


    );
};

const URLButton = ({ onClick, isOpen }) => {
  return (
   
    <motion.button onClick={onClick} animate={isOpen ? "open" : "closed"} initial={false} style={{width: 'auto' , height:'6vh', padding: '5px',backgroundColor:'rgb(192, 98, 167)'}}>
      <motion.div whileHover={{ scale: 1 }} whileTap={{ scale: 0.9 }} style={{ x: 0}}>
      <img src={urlIcon} style={{width: 'auto' , height:'4vh'}} alt="URL box" />
      </motion.div> 
    </motion.button>


    );
};




const slideVerticalAnimation = {
  open: {
    rotateX: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      mass: 0.8,
      type: "spring"
    },
    display: "block"
  },
  close: {
    rotateX: -15,
    y: -320,
    opacity: 0,
    transition: {
      duration: 0.3
    },
    transitionEnd: {
      display: "none"
    }
  }
};

const sliderHorizontalAnimation = {
  open: {
    rotateX: 0,
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      mass: 0.8,
      type: "spring"
    },
    display: "block"
  },
  close: {
    rotateX: -15,
    x: -300,
    opacity: 0,
    transition: {
      duration: 0.3
    },
    transitionEnd: {
      display: "none"
    }
  }
};





let lime = 'rgb(198, 215, 71)'
let green = 'rgb(121, 194, 103)' 
let pink = 'rgb(232, 104, 162)' 
let purple = 'rgb(192, 98, 167)'
let yellow = 'rgb(245, 214, 61)' 
let orange = 'rgb(242, 140, 51)' 
let sky = 'rgb(120, 197, 214)' 
let blue = 'rgb(69, 155, 168)'
let black = "black"
let white = "white"


const colors = [
  lime,
  green,
  pink,
  purple,
  yellow,
  orange,
  sky,
  blue,
  black,
  white
]

const texture = [
  'hachure', 
  'solid', 
  'zigzag', 
  'cross-hatch', 
  'dots', 
  'sunburst', 
  'dashed', 
  'zigzag-line'
]
let restore_array = [];
let start_index = -1;
export default function App() {
  //Toolset Menu
  const [isOpen, toggleDropdown] = useCycle(false, true);
  //Stroke thickness
  const [isStrokeOpen, toggleStrokeDropdown] = useCycle(false, true);
  const [isPaletteOpen, togglePaletteDropdown] = useCycle(false, true);
  const [isCircleHeightOpen, toggleCircleHeightDropdown] = useCycle(false, true);
  const [isCircleWidthOpen, toggleCircleWidthDropdown] = useCycle(false, true);

  const [isSquareHeightOpen, toggleSquareHeightDropdown] = useCycle(false, true);
  
  const [isSquareWidthOpen, toggleSquareWidthDropdown] = useCycle(false, true);

  const [isShapeFillColorOpen, toggleShapeFillColorOpen] = useCycle(false, true);

  const [isShapeStrokeColorOpen, toggleShapeStrokeColorOpen] = useCycle(false, true);

  const [isShapeTextureOpen, toggleShapeTextureOpen] = useCycle(false, true);

  
  const [isURLOpen, toggleURLOpen] = useCycle(false, true);

  const [GoHome, toggleGoHome] = useCycle(false,true);
  const HomeVariant = {
    closed: {
      opacity: 0
    },
    open: { opacity: 1 }
  };

  let navigate = useNavigate();

  const GotoHome = () => {
    navigate("/user");
  }


  
  
  const canvasRef = useRef(null);
  const ctx = useRef(null);
  const [image, setImage] = useState(rice);
  const [image1, setImage1] = useState(rice);
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [selectedStrokeColor, setSelectedStrokeColor] = useState(colors[0]);
  const [selectedFillColor, setSelectedFillColor] = useState(colors[0]);
  const [selectedShapeFillTexture, setSelectedShapeFillTexture] = useState(texture[0]);

  const [CircleWidth, setCircleWidth] = useState(10)
  const [CircleHeight, setCircleHeight] = useState(10)

  const [SquareWidth, setSquareWidth] = useState(10)
  const [SquareHeight, setSquareHeight] = useState(10)

  const [selectedShapeFillColor, setSelectedShapeFillColor] = useState(colors[0]);
  const [selectedShapeStrokeColor, setSelectedShapeStrokeColor] = useState(colors[0]);
  
  
  const [selectedStrokeWidth, setSelectedStrokeWidth] = useState(1);
  
  

  const [mouseDown, setMouseDown] = useState(false);
  const [drawing, setDrawing] = useState(false);
  const [lastPosition, setPosition] = useState({
    x: 0,
    y: 0
  });
  const [squarePosition, setSquarePosition] = useState({
    x: 0,
    y: 0
  })
  const [circlePosition, setCirclePosition] = useState({
    x: 0,
    y: 0
  })


  useEffect(() => {if (canvasRef.current) {ctx.current = canvasRef.current.getContext('2d');}}, []);

    
   
  
    const draw = useCallback((x, y) => {
      if (mouseDown) {
      ctx.current.beginPath();
      ctx.current.strokeStyle = selectedColor;
      ctx.current.lineWidth = selectedStrokeWidth;
      ctx.current.lineJoin = 'round';
      ctx.current.moveTo(lastPosition.x, lastPosition.y);
      ctx.current.lineTo(x, y);
      ctx.current.closePath();
      ctx.current.stroke();
      setPosition({ x, y })
     } }, [lastPosition, mouseDown, selectedColor, setPosition]
    )
      
   
    function getRandomInt(max) {
      return Math.floor(Math.random() * max);
    }

    const DrawSquare = (x, y) => {
    const canvas = rough.canvas(document.getElementById("canvas"));
    canvas.rectangle(x, y, SquareWidth*1, SquareHeight*1,{ fillStyle:selectedShapeFillTexture ,roughness: getRandomInt(10), bowing: getRandomInt(10), stroke:selectedShapeStrokeColor, strokeWidth: selectedStrokeWidth, fill: selectedFillColor });
    setSquarePosition({ x , y })
    }
    

    const DrawCircle = (x, y) => {
      const canvas = rough.canvas(document.getElementById("canvas"));
      canvas.ellipse(x, y, CircleWidth, CircleHeight,{ fillStyle:selectedShapeFillTexture ,roughness: getRandomInt(10), bowing: getRandomInt(10), stroke:selectedShapeStrokeColor, strokeWidth: selectedStrokeWidth, fill: selectedFillColor });
      setCirclePosition({ x , y })
      }

    const download = async () => {
    const image = canvasRef.current.toDataURL('image/png');
    const blob = await (await fetch(image)).blob();
    const blobURL = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = blobURL;
    link.download = "image.png";
    link.click();
    }

    
    
  window.onload = function Setbackground(){
     const canvas = rough.canvas(document.getElementById("canvas"));
     canvas.ellipse(0, 0, 10000, 10000,{ bowing: 2, stroke:'white', strokeWidth: 2, fill: 'white', fillStyle: 'solid' });
    }

    function bg() {
      var c = document.getElementById("canvas");
      var ctx = c.getContext("2d");
      var img = document.getElementById("rice");
      var pat = ctx.createPattern(img, "repeat");
      ctx.rect(0, 0, 1000, 1000);
      ctx.fillStyle = pat;
      ctx.fill();
        }

    function bg1() {
       var c = document.getElementById("canvas");
       var ctx = c.getContext("2d");
       var img = document.getElementById("animal");
       var pat = ctx.createPattern(img, "repeat");
       ctx.rect(0, 0, 1000, 1000);
       ctx.fillStyle = pat;
       ctx.fill();
            }
     //function bg3() {
     // var c = document.getElementById("canvas");
     // var ctx = c.getContext("2d");
     // var drawing1 = new Image();
      //      drawing1.src = image1; // can also be a remote URL e.g. http://
      //      drawing1.onload = function() {
       //     ctx.drawImage(drawing1,0,0);
       //     };
       //   }
    
    const clear = () => {ctx.current.clearRect(0, 0, ctx.current.canvas.width, ctx.current.canvas.height)}

  const [tool, setTool] = useState()
  const ChangeToPaintTool =()=>{setTool('draw')}
  const ChangeToSquareTool =()=>{setTool('square')}
  const ChangeToCircleTool =()=>{setTool('circle')}


  const onMouseDown = (e) => {
    setPosition({
      x: e.pageX,
      y: e.pageY
    })
    if (tool === 'square') {
    setSquarePosition({
      x: e.pageX, 
      y: e.pageY
    })
    
    DrawSquare(e.pageX, e.pageY)
    } else if (tool === 'circle') {
      setCirclePosition({
        x: e.pageX, 
        y: e.pageY
      })
      
      DrawCircle(e.pageX, e.pageY)
      }
    setMouseDown(true)
    setDrawing(true)


  }

  const onMouseUp = (e) => {
    setMouseDown(false)
    setDrawing(false)

    restore_array.push(ctx.current.getImageData(0, 0, ctx.current.canvas.width,  ctx.current.canvas.height));
    start_index += 1;
    console.log(restore_array)
  }

  const onMouseMove = (e) => {
    if (tool === 'draw') {
    draw(e.pageX, e.pageY)
  } 
  if(!drawing) return;

  };

var canvas = document.getElementById('canvas');
function resize(){    
  $("#canvas").outerHeight($(window).height()-$("#canvas").top- Math.abs($("#canvas").outerHeight(true) - $("#canvas").outerHeight()));
  
}
$(document).ready(function(){
  resize();
  $(window).on("resize", function(){                      
      resize();
  });
});
function Restore(e) {
  if (start_index <= 0) {
    clear()
  } else {
    start_index += -1;
    restore_array.pop();
    if ( e.type != 'mouseout' ) {
      ctx.current.putImageData(restore_array[start_index], 0, 0);
    }
  }
}

const paint_brush_Selection = () => {
  document.getElementById("brush").style.backgroundColor = "rgb(232, 104, 162)";
  document.getElementById("circle").style.backgroundColor = "rgb(242, 140, 51)";
  document.getElementById("square").style.backgroundColor = "rgb(198, 215, 71)";
}
const square_tool_Selection = () => {

  document.getElementById("brush").style.backgroundColor = "rgb(121, 194, 103)";
  document.getElementById("circle").style.backgroundColor = "rgb(242, 140, 51)";
  document.getElementById("square").style.backgroundColor = "rgb(232, 104, 162)";

}
const circle_tool_Selection = () => {

  document.getElementById("brush").style.backgroundColor = 'rgb(121, 194, 103)';
  document.getElementById("circle").style.backgroundColor = "rgb(232, 104, 162)";
  document.getElementById("square").style.backgroundColor = "rgb(198, 215, 71)";

}




  return (
    <div>

<div className="wrapper">
<motion.div initial={{ opacity: 0, rotate: 0, scale: 0}} animate={{ opacity: 1, rotate: 360, scale: 1}}>
      <MenuButton onClick={toggleDropdown} isOpen={isOpen} />
</motion.div>
      <motion.div
        className="dropdown-container"
        
        initial="close"
        animate={isOpen ? "open" : "close"}
        variants={slideVerticalAnimation}
      >
        <motion.div className="menu menu-categories">

      <div className="toolset-row-1">
      <motion.div onClick={()=> paint_brush_Selection()} whileHover={{ scale: 1 }} whileTap={{ scale: 0.9 }} style={{ x: 0}}>
      <div class="tooltip">
      <button id="brush" className="PaintBrush-button"  style={{width: 'auto' , height:'6vh', padding: '5px' }} onClick={ChangeToPaintTool}><img src={pencil} style={{width: 'auto' , height:'4vh'}} alt="pen" /></button>
      <motion.div whileTap={{ opacity:0 }}>
      <span class="tooltiptext">Paintbrush</span>
      </motion.div>
      </div>
      </motion.div>
      <div class="tooltip">
      <motion.div whileHover={{ scale: 1 }} whileTap={{ scale: 0.9 }} style={{ x: 0}}>
      <PaletteButton onClick={togglePaletteDropdown}  isOpen={isPaletteOpen}/>
      <motion.div whileTap={{ opacity:0 }}>
      <span class="tooltiptext">Palette</span>
      </motion.div>
      </motion.div>
      </div>
      <div class="Bottom-row-tooltip">
      <motion.div whileHover={{ scale: 1 }} whileTap={{ scale: 0.9 }} style={{ x: 0}}>
      <ThicknessButton onClick={toggleStrokeDropdown}  isOpen={isStrokeOpen}/>
      <motion.div whileTap={{ opacity:0 }}>
      <span class="Bottom-row-tooltiptext">Line Thickness</span>
      </motion.div>
      </motion.div>
      </div>
      </div>

      <div className="toolset-row-2">
      <motion.div  onClick={()=> circle_tool_Selection()} whileHover={{ scale: 1 }} whileTap={{ scale: 0.9 }} style={{ x: 0}}>
      <div class="tooltip">
      <button id="circle" style={{width: 'auto' , height:'6vh', padding: '5px',backgroundColor:'rgb(242, 140, 51)'}} onClick={ChangeToCircleTool}><img src={circle} style={{width: 'auto' , height:'4vh'}} alt="circle-shape" /></button>
      <motion.div whileTap={{ opacity:0 }}>
      <span class="tooltiptext">Circle Tool</span>
      </motion.div>
      </div>
      </motion.div>
      <div class="tooltip">
      <motion.div whileHover={{ scale: 1 }} whileTap={{ scale: 0.9 }} style={{ x: 0}}> 
      <CircleHeightButton onClick={toggleCircleHeightDropdown}  isOpen={isCircleHeightOpen}/>
      <motion.div whileTap={{ opacity:0 }}>
      <span class="tooltiptext">Circle Height</span>
      </motion.div>
      </motion.div> 
      </div>
      <div class="Bottom-row-tooltip">
      <motion.div whileHover={{ scale: 1 }} whileTap={{ scale: 0.9 }} style={{ x: 0}}> 
      <CircleWidthButton onClick={toggleCircleWidthDropdown}  isOpen={isCircleWidthOpen}/>
      <motion.div whileTap={{ opacity:0 }}>
      <span class="Bottom-row-tooltiptext">Circle Width</span>
      </motion.div>
      </motion.div>
      </div>
      </div>
      <div className="toolset-row-3">
      <div class="tooltip">
      <motion.div whileHover={{ scale: 1 }} whileTap={{ scale: 0.9 }} style={{ x: 0}}> 
      <ShapeStrokeColorButton onClick={toggleShapeStrokeColorOpen} isOpen={isShapeStrokeColorOpen}/>
      <motion.div whileTap={{ opacity:0 }}>
      <span class="tooltiptext">Shape Stroke Color</span>
      </motion.div>
      </motion.div>
      </div>
      <div class="tooltip">
      <motion.div whileHover={{ scale: 1 }} whileTap={{ scale: 0.9 }} style={{ x: 0}}> 
      <ShapeFillColorButton onClick={toggleShapeFillColorOpen} isOpen={isShapeFillColorOpen}/>
      <motion.div whileTap={{ opacity:0 }}>
      <span class="tooltiptext">Shape Fill</span>
      </motion.div>
      </motion.div>
      </div>
      <motion.div whileHover={{ scale: 1 }} whileTap={{ scale: 0.9 }} style={{ x: 0}}>
      <div class="Bottom-Right-row-tooltip1">
      <ShapeTextureButton onClick={toggleShapeTextureOpen} isOpen={isShapeTextureOpen}/>
      <motion.div whileTap={{ opacity:0 }}>
      <span class="Bottom-Right-row-tooltiptext1">Texture</span>
      </motion.div>
      </div>
      </motion.div>
      </div>

      <div className="toolset-row-4">
      <motion.div  onClick={()=> square_tool_Selection()} whileHover={{ scale: 1 }} whileTap={{ scale: 0.9 }} style={{ x: 0}}>
      <div class="Right-tooltip">
      <motion.div initial={{ opacity: 0 , x: "-100vw", rotate: 0, scale: 0}} animate={{ opacity: 1, x: "0", rotate: 360, scale: 1}}>
      <button id="square" style={{width: 'auto' , height:'6vh', padding: '5px',backgroundColor:'rgb(198, 215, 71)'}}   onClick={ChangeToSquareTool}><img src={square} style={{width: 'auto' , height:'4vh'}} alt="square-shape" /></button>
      </motion.div>
      <motion.div whileTap={{ opacity:0 }}>
      <span class="Right-tooltiptext">Square Tool</span>
      </motion.div>
      </div>
      </motion.div>
      <div class="Right-tooltip">
      <motion.div whileHover={{ scale: 1 }} whileTap={{ scale: 0.9 }} style={{ x: 0}}>
      <SquareHeightButton onClick={toggleSquareHeightDropdown}  isOpen={isSquareHeightOpen}/>
      <motion.div whileTap={{ opacity:0 }}>
      <span class="Right-tooltiptext">Square Height</span>
      </motion.div>
      </motion.div>
      </div>
      <div class="Bottom-Right-row-tooltip">
      <motion.div whileHover={{ scale: 1 }} whileTap={{ scale: 0.9 }} style={{ x: 0}}>
      <SquareWidthButton onClick={toggleSquareWidthDropdown}  isOpen={isSquareWidthOpen}/>
      <motion.div whileTap={{ opacity:0 }}>
      <span class="Bottom-Right-row-tooltiptext">Square Width</span>
      </motion.div>
      </motion.div>
      </div>
      </div>
      <div className="toolset-row-5">
      <div class="Right-tooltip">
      <motion.div whileHover={{ scale: 1 }} whileTap={{ scale: 0.9 }} style={{ x: 0}}>
      <button style={{width: 'auto' , height:'6vh', padding: '5px',backgroundColor:'rgb(192, 98, 167)'}}  onClick={bg}><img src={layer} style={{width: 'auto' , height:'4vh'}} alt="URL Image paste" /></button>
      </motion.div>
      <motion.div whileTap={{ opacity:0 }}>
      <span class="Right-tooltiptext">Paste URL Image</span>
      </motion.div>
      </div>
      <div class="Right-tooltip">
      <motion.div whileHover={{ scale: 1 }} whileTap={{ scale: 0.9 }} style={{ x: 0}}>
      <URLButton onClick={ toggleURLOpen} isOpen={isURLOpen}/>
      <motion.div whileTap={{ opacity:0 }}>
      <span class="Right-tooltiptext">URL Text Box</span>
      </motion.div>
      </motion.div>
      </div>
      <div class="Bottom-Right-row-tooltip">
      <motion.div whileHover={{ scale: 1 }} whileTap={{ scale: 0.9 }} style={{ x: 0}}>
      <button style={{width: 'auto' , height:'6vh', padding: '5px',backgroundColor:'rgb(192, 98, 167)'}}  onClick={download}><img src={saveIcon} style={{width: 'auto' , height:'4vh'}} alt="Save Image" /></button>
      </motion.div>
      <motion.div whileTap={{ opacity:0 }}>
      <span class="Bottom-Right-row-tooltiptext">Save Image</span>
      </motion.div>
      </div>
      </div>
 
        </motion.div>
        </motion.div>

        </div>

    <motion.div initial="close" animate={isStrokeOpen ? "open" : "close"} variants={sliderHorizontalAnimation}>
          <div className="slider-button-wrapper">
          <div className="alert">
          <span className="closebtn"onClick={toggleStrokeDropdown}>&times;</span>  
          <div className="slidecontainer">
          <input type="range" min="1" max="100" value={selectedStrokeWidth} onChange={(e) => setSelectedStrokeWidth(e.target.value)} class="slider" id="myRange"/>
          </div>
          </div>
          </div>
    </motion.div>

    
    <motion.div initial="close" animate={isPaletteOpen ? "open" : "close"} variants={sliderHorizontalAnimation}>
          <div className="slider-button-wrapper">
          <div className="alert">
          <span className="closebtn"onClick={togglePaletteDropdown}>&times;</span>  
      
    
        <select value={selectedColor}  style={{borderRadius:"50%", backgroundColor:selectedColor, width: "5vw", height:"5vh"}} onChange={(e) => setSelectedColor(e.target.value)}>
        <option style={{backgroundColor:"rgb(198, 215, 71)"}} key={colors[0]} value={colors[0]}>Lime</option>
        <option style={{backgroundColor:"rgb(121, 194, 103)"}} key={colors[1]} value={colors[1]}>Green</option>
        <option style={{backgroundColor:"rgb(232, 104, 162)"}} key={colors[2]} value={colors[2]}>Pink</option>
        <option style={{backgroundColor:"rgb(192, 98, 167)"}} key={colors[3]} value={colors[3]}>Purple</option>
        <option style={{backgroundColor:"rgb(245, 214, 61)"}} key={colors[4]} value={colors[4]}>Yellow</option>
        <option style={{backgroundColor:"rgb(242, 140, 51)"}} key={colors[5]} value={colors[5]}>Orange</option>
        <option style={{backgroundColor:"rgb(120, 197, 214)"}} key={colors[6]} value={colors[6]}>Sky</option>
        <option style={{backgroundColor:"rgb(69, 155, 168)"}} key={colors[7]} value={colors[7]}>Blue</option>
        <option style={{backgroundColor:"black", color:'white'}} key={colors[8]} value={colors[8]}>Black</option>
        <option style={{backgroundColor:"white", color:'black'}} key={colors[9]} value={colors[9]}>White</option>
        </select>
        </div>
        </div>

    </motion.div>

    <motion.div initial="close" animate={isCircleHeightOpen ? "open" : "close"} variants={sliderHorizontalAnimation}>
          <div className="slider-button-wrapper">
          <div className="alert-orange">
          <span className="closebtn-orange"onClick={toggleCircleHeightDropdown}>&times;</span>  
          <div className="slidecontainer-orange">
          <input type="range" min="1" max="1000" value={CircleHeight} onChange={(e) =>setCircleHeight(e.target.value)} class="slider-orange" id="myRange"/>
          </div>
          </div>
          </div>
    </motion.div>
    <motion.div initial="close" animate={isCircleWidthOpen ? "open" : "close"} variants={sliderHorizontalAnimation}>
          <div className="slider-button-wrapper">
          <div className="alert-orange">
          <span className="closebtn-orange"onClick={toggleCircleWidthDropdown}>&times;</span>  
          <div className="slidecontainer-orange">
          <input type="range" min="1" max="1000" value={CircleWidth} onChange={(e) =>setCircleWidth(e.target.value)} class="slider-orange" id="myRange"/>
          </div>
          </div>
          </div>
    </motion.div>

    <motion.div initial="close" animate={isSquareHeightOpen ? "open" : "close"} variants={sliderHorizontalAnimation}>
          <div className="slider-button-wrapper">
          <div className="alert-lime">
          <span className="closebtn-lime"onClick={toggleSquareHeightDropdown}>&times;</span>  
          <div className="slidecontainer-lime">
          <input type="range" min="1" max="1000" value={SquareHeight} onChange={(e) => setSquareHeight(e.target.value)} class="slider-lime" id="myRange"/>
          </div>
          </div>
          </div>
    </motion.div>

    <motion.div initial="close" animate={isSquareWidthOpen ? "open" : "close"} variants={sliderHorizontalAnimation}>
          <div className="slider-button-wrapper">
          <div className="alert-lime">
          <span className="closebtn-lime"onClick={toggleSquareWidthDropdown}>&times;</span>  
          <div className="slidecontainer-lime">
          <input type="range" min="1" max="1000" value={SquareWidth} onChange={(e) => setSquareWidth(e.target.value)} class="slider-lime" id="myRange"/>
          </div>
          </div>
          </div>
    </motion.div>
    <motion.div initial="close" animate={isShapeFillColorOpen ? "open" : "close"} variants={sliderHorizontalAnimation}>
          <div className="slider-button-wrapper">
          <div className="alert-blue">
          <span className="closebtn" onClick={toggleShapeFillColorOpen}>&times;</span>  
      
    
        <select value={selectedFillColor}  style={{borderRadius:"50%", backgroundColor:selectedFillColor, width: "5vw", height:"5vh"}} onChange={(e) =>  setSelectedFillColor(e.target.value)}>
        <option style={{backgroundColor:"rgb(198, 215, 71)"}} key={colors[0]} value={colors[0]}>Lime</option>
        <option style={{backgroundColor:"rgb(121, 194, 103)"}} key={colors[1]} value={colors[1]}>Green</option>
        <option style={{backgroundColor:"rgb(232, 104, 162)"}} key={colors[2]} value={colors[2]}>Pink</option>
        <option style={{backgroundColor:"rgb(192, 98, 167)"}} key={colors[3]} value={colors[3]}>Purple</option>
        <option style={{backgroundColor:"rgb(245, 214, 61)"}} key={colors[4]} value={colors[4]}>Yellow</option>
        <option style={{backgroundColor:"rgb(242, 140, 51)"}} key={colors[5]} value={colors[5]}>Orange</option>
        <option style={{backgroundColor:"rgb(120, 197, 214)"}} key={colors[6]} value={colors[6]}>Sky</option>
        <option style={{backgroundColor:"rgb(69, 155, 168)"}} key={colors[7]} value={colors[7]}>Blue</option>
        <option style={{backgroundColor:"black", color:'white'}} key={colors[8]} value={colors[8]}>Black</option>
        <option style={{backgroundColor:"white", color:'black'}} key={colors[9]} value={colors[9]}>White</option>
        </select>
        </div>
        </div>

    </motion.div>
    <motion.div initial="close" animate={isShapeStrokeColorOpen ? "open" : "close"} variants={sliderHorizontalAnimation}>
          <div className="slider-button-wrapper">
          <div className="alert-blue">
          <span className="closebtn-blue"onClick={toggleShapeStrokeColorOpen}>&times;</span>  
      
    
        <select value={selectedShapeStrokeColor}  style={{borderRadius:"50%", backgroundColor:selectedShapeStrokeColor, width: "5vw", height:"5vh"}} onChange={(e) =>  setSelectedShapeStrokeColor(e.target.value)}>
        <option style={{backgroundColor:"rgb(198, 215, 71)", color:'white'}} key={colors[0]} value={colors[0]}>Lime</option>
        <option style={{backgroundColor:"rgb(121, 194, 103)", color:'white'}} key={colors[1]} value={colors[1]}>Green</option>
        <option style={{backgroundColor:"rgb(232, 104, 162)", color:'white'}} key={colors[2]} value={colors[2]}>Pink</option>
        <option style={{backgroundColor:"rgb(192, 98, 167)", color:'white'}} key={colors[3]} value={colors[3]}>Purple</option>
        <option style={{backgroundColor:"rgb(245, 214, 61)", color:'white'}} key={colors[4]} value={colors[4]}>Yellow</option>
        <option style={{backgroundColor:"rgb(242, 140, 51)", color:'white'}} key={colors[5]} value={colors[5]}>Orange</option>
        <option style={{backgroundColor:"rgb(120, 197, 214)", color:'white'}} key={colors[6]} value={colors[6]}>Sky</option>
        <option style={{backgroundColor:"rgb(69, 155, 168)", color:'white'}} key={colors[7]} value={colors[7]}>Blue</option>
        <option style={{backgroundColor:"black", color:'white'}} key={colors[8]} value={colors[8]}>Black</option>
        <option style={{backgroundColor:"white", color:'black'}} key={colors[9]} value={colors[9]}>White</option>
        </select>
        </div>
        </div>

    </motion.div>
    <motion.div initial="close" animate={isShapeTextureOpen ? "open" : "close"} variants={sliderHorizontalAnimation}>
          <div className="slider-button-wrapper">
          <div className="alert-blue">
          <span className="closebtn-blue"onClick={toggleShapeTextureOpen}>&times;</span>  
      
    
        <select value={selectedShapeFillTexture}  style={{borderRadius:"50%", width: "5vw", height:"5vh"}} onChange={(e) =>  setSelectedShapeFillTexture(e.target.value)}>
        <option style={{backgroundColor:"rgb(198, 215, 71)"}} key={texture[0]} value={texture[0]}>hachure</option>
        <option style={{backgroundColor:"rgb(121, 194, 103)"}} key={texture[1]} value={texture[1]}>solid</option>
        <option style={{backgroundColor:"rgb(232, 104, 162)"}} key={texture[2]} value={texture[2]}>zigzag</option>
        <option style={{backgroundColor:"rgb(192, 98, 167)"}} key={texture[3]} value={texture[3]}>cross-hatch</option>
        <option style={{backgroundColor:"rgb(245, 214, 61)"}} key={texture[4]} value={texture[4]}>dots</option>
        <option style={{backgroundColor:"rgb(242, 140, 51)"}} key={texture[5]} value={texture[5]}>dashed</option>
        <option style={{backgroundColor:"rgb(120, 197, 214)"}} key={texture[6]} value={texture[6]}>zigzag-line</option>
        </select>
        </div>
        </div>

    </motion.div>
    <motion.div initial="close" animate={isURLOpen ? "open" : "close"} variants={sliderHorizontalAnimation}>
          <div className="slider-button-wrapper">
          <div className="alert-purple">
          <span className="closebtn-purple"onClick={toggleURLOpen}>&times;</span>  
          <input type="text" defaultValue="PASTE URL JPEG/PNG" onChange={(e) => setImage(e.target.value)}/>
        

        </div>
        </div>

    </motion.div>
  



    <div className="backgroundToolset">
   
      <canvas
      id="canvas"
      style={{
        border:'4px solid rgb(120, 197, 214)',
        backgroundColor:'white',
      }}
        width={window.innerWidth}
        height={window.innerHeight}
        
        ref={canvasRef}
        onPointerDown={onMouseDown}
        onPointerUp={onMouseUp}
        onPointerLeave={onMouseUp}
        onPointerMove={onMouseMove}
      />
      
     
      


      {/* <div className="toolset-row2">
      <select value={selectedStrokeColor} onChange={(e) => setSelectedStrokeColor(e.target.value)}>
        {colors.map(color => <option key={color} value={color}>{color}</option>)}
      </select>
      <select value={selectedColor} onChange={(e) => setSelectedColor(e.target.value)}>
        {colors.map(color => <option key={color} value={color}>{color}</option>)}
      </select>
      <button className={'button-layer'} onClick={bg1}>Layer</button>
      <input
          type="text" 
          value="Image URL"
          onChange={(e) => setImage(e.target.value)}
        />
      </div> */}
     
      

      
      
      <div className="hide">
      <img src={image} id="rice" width="32" height="32" crossOrigin="true"></img>
      <img src={image} id="animal" width="32" height="32"crossOrigin="true"></img>
      </div>
  
    </div>
  <div className='undo-button-wrapper'>
  <motion.div className="home-button" animate={isOpen ? "open" : "close"} variants={slideVerticalAnimation}><motion.div whileHover={{ scale: 1 }} whileTap={{ scale: 0.9 }} style={{ x: 0}}>
      <button style={{width: 'auto' , height:'6vh', padding: '5px',backgroundColor:'rgb(245, 214, 61)'}}   onClick={()=>toggleGoHome(GoHome ? "Close" : "Open")}><motion.img src={saveIcon} animate={{rotate:90}}  style={{width: 'auto' , height:'4vh'}} alt="Save Image" /></button>
      </motion.div></motion.div>
  <div className='undo-button'>
  <motion.div whileHover={{ scale: 1 }} whileTap={{ scale: 0.9 }} style={{ x: 0}}>
  <motion.div initial={{  opacity: 0, rotate: 0, scale: 0}} animate={{ opacity: 1, rotate: 360, scale: 1}}>
  <button style={{backgroundColor:'rgb(232, 104, 162)', width: 'auto' , height:'6vh',}}  onClick={Restore}><img  style={{width: 'auto' , height:'4vh',backgroundColor:'rgb(232, 104, 162)'}} src={undoIcon}/></button>
  </motion.div>
  </motion.div>
  </div>
  </div>

  <AnimatePresence>
{GoHome && (

<motion.div className="GoHome-pop-up-box"
    initial={{scale:0,
    opacity: 0 }}
animate={{
    scale: 1,
    opacity: 1,
    transition: {  type: "spring",
    stiffness: 25,
    
    velocity: 25, delay: .10, duration: 0.2 }
}}
exit={{scale: 0}}
variants={HomeVariant}
>
  <motion.div className="GoHome-pop-up-box-text"
     initial={{ scale: 0 }}
     animate={{ scale: 1 }}
     transition={{
         type: "spring",
            stiffness: 3,
            damping: 5,
            velocity: 4,
             duration: 0.25,
             delay: .25, 
             duration: 1 
            }}>
            Are you sure you want to go Home? <br/><i style={{fontSize:'3vw'}}> unsaved images will be lost...</i>
            <div className='GoHome-pop-up-box-buttons'>
            <motion.button className='GoHome-pop-up-box-buttons-colors'
            whileHover={{ scale: 1.25 }} whileTap={{ scale: 0.9 }}
            ><div onClick={() => GotoHome()}>YEP</div> </motion.button> 
             <motion.button className='GoHome-pop-up-box-buttons-colors'
              onClick={() => toggleGoHome(GoHome ? "Close" : "Open")}
            whileHover={{ scale: 1.25 }} whileTap={{ scale: 0.9 }}
            >NOPE</motion.button> 
            </div>
  </motion.div>
</motion.div>
              

             )}

</AnimatePresence>

  


  </div>

    



   
  );
}

