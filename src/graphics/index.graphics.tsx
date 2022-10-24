import * as React from 'react';
import * as ReactDOM from 'react-dom';

import './index.graphics.css';

function GraphicsRoot() {
  const path = `nodecg${window.location.pathname}`;

  // You can access the NodeCG api anytime from the `window.nodecg` object
  // Or just `nodecg` for short. Like this!:
  nodecg.log.info("Here's an example of using NodeCG's logging API!");

  return (
    <div className="p-2 space-y-4">
      <p>
        Hello, I&apos;m one of the graphics in your bundle! I&apos;m where you put the graphics you
        want to run in your broadcast software!
      </p>

      <p>
        To edit me, open &quot;<span className="font-mono">{path}</span>&quot; in your favorite text
        editor or IDE.
      </p>

      <p>You can use any libraries, frameworks, and tools you want. There are no limits.</p>

      <p>
        Visit{' '}
        <a
          className="text-blue-500"
          href="https://nodecg.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://nodecg.com
        </a>{' '}
        for full documentation.
      </p>

      <p>Have fun!</p>
    </div>
  );
}

ReactDOM.render(<GraphicsRoot />, document.getElementById('root'));
