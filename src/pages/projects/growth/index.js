import React from "react"
import Layout from '../../../components/layout';
import { Typography } from "@material-ui/core";
import Unity, { UnityContent } from "react-unity-webgl";

export class Growth extends React.Component {
  constructor(props) {
    super(props);
    this.unityContent = new UnityContent(
      "/growth/Build/WebGL.json",
      "/growth/Build/UnityLoader.js"
    );
    this.state = {
      unityComponent: <></>
    };
  }

  componentDidMount() {
    const unityComponent = <Unity unityContent={this.unityContent} />;
    this.setState({unityComponent});
  }

  render() {
    const { unityComponent } = this.state;
    return <div style={{
      width: '100%',
      height: '600px',
    }}>
      { unityComponent }
    </div>;
  }
}

const ProjectsPage = () => (
  <Layout>
    <Typography variant="headline">
      Growth
    </Typography>
    <Typography variant="body1" component='div'>
      <h2>Controls</h2>
      <p>Move: WSAD, Arrow Keys, or Joystick</p>

      <Growth />

      <h2>About the game</h2>
      <p>The player spawns as a sphere in the middle of a multi-staged arena. The player should eat the food that spawns on the platform, and all enemies that are smaller. Whenever two entities collide, the entity that is bigger absorbs the smaller entity and grows, and the smaller entity respawns at its base size to a random position.</p>
      <p>This game was built with Unity3D. It is optimized for larger resolutions on a desktop and is not supported on smaller resolutions/mobile phones. The "Exit Game" buttons will not do anything when played in the browser. A build for the desktop can be found on the project's <a href="https://github.com/mbarneyjr/growth" target="_blank" rel="noopener noreferrer">GitHub</a>.</p>
    </Typography>
  </Layout>
);

export default ProjectsPage;
