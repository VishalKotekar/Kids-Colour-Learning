import { useState } from 'react';

// Define a mapping from color to sound file
const soundMapping = {
  red: '/sounds/red.mp3',
  green: '/sounds/green.mp3',
  blue: '/sounds/blue.mp3',
  purple: '/sounds/purple.mp3',
  black: '/sounds/black.mp3',
  pink: '/sounds/pink.mp3',
  orange: '/sounds/orange.mp3',
  yellow: '/sounds/yellow.mp3',
  cyan: '/sounds/cyan.mp3',
  magenta: '/sounds/magenta.mp3',
  brown: '/sounds/brown.mp3',
  lime: '/sounds/lime.mp3',
};

function App() {
  const [color, setColor] = useState('olive');

  const playSound = (color) => {
    const sound = new Audio(soundMapping[color]);
    sound.play();
  };

  const handleButtonClick = (color) => {
    setColor(color);
    playSound(color);
  };

  return (
    <>
      <div
        className='w-full h-screen duration-200 flex flex-col items-center justify-center'
        style={{ backgroundColor: color }}
      >
        {/* Display color name */}
        <div className='text-4xl font-bold text-white'>
          {color.charAt(0).toUpperCase() + color.slice(1)}
        </div>

        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-2 rounded-3xl'>
            <button
              onClick={() => handleButtonClick('red')}
              className='outline-none px-4 py-1 rounded-full text-white shadow-2xl'
              style={{ backgroundColor: 'red' }}
            >
              Red
            </button>
            <button
              onClick={() => handleButtonClick('green')}
              className='outline-none px-4 py-1 rounded-full text-white shadow-2xl'
              style={{ backgroundColor: 'green' }}
            >
              Green
            </button>
            <button
              onClick={() => handleButtonClick('blue')}
              className='outline-none px-4 py-1 rounded-full text-white shadow-2xl'
              style={{ backgroundColor: 'blue' }}
            >
              Blue
            </button>
            <button
              onClick={() => handleButtonClick('purple')}
              className='outline-none px-4 py-1 rounded-full text-white shadow-2xl'
              style={{ backgroundColor: 'purple' }}
            >
              Purple
            </button>
            <button
              onClick={() => handleButtonClick('black')}
              className='outline-none px-4 py-1 rounded-full text-white shadow-2xl'
              style={{ backgroundColor: 'black' }}
            >
              Black
            </button>
            <button
              onClick={() => handleButtonClick('pink')}
              className='outline-none px-4 py-1 rounded-full text-white shadow-2xl'
              style={{ backgroundColor: 'pink' }}
            >
              Pink
            </button>
            <button
              onClick={() => handleButtonClick('orange')}
              className='outline-none px-4 py-1 rounded-full text-white shadow-2xl'
              style={{ backgroundColor: 'orange' }}
            >
              Orange
            </button>
            <button
              onClick={() => handleButtonClick('yellow')}
              className='outline-none px-4 py-1 rounded-full text-white shadow-2xl'
              style={{ backgroundColor: 'yellow' }}
            >
              Yellow
            </button>
            {/* New buttons for additional colors */}
            <button
              onClick={() => handleButtonClick('cyan')}
              className='outline-none px-4 py-1 rounded-full text-white shadow-2xl'
              style={{ backgroundColor: 'cyan' }}
            >
              Cyan
            </button>
            <button
              onClick={() => handleButtonClick('magenta')}
              className='outline-none px-4 py-1 rounded-full text-white shadow-2xl'
              style={{ backgroundColor: 'magenta' }}
            >
              Magenta
            </button>
            <button
              onClick={() => handleButtonClick('brown')}
              className='outline-none px-4 py-1 rounded-full text-white shadow-2xl'
              style={{ backgroundColor: 'brown' }}
            >
              Brown
            </button>
            <button
              onClick={() => handleButtonClick('lime')}
              className='outline-none px-4 py-1 rounded-full text-white shadow-2xl'
              style={{ backgroundColor: 'lime' }}
            >
              Lime
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
