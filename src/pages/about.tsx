import * as React from "react";
import { Header, Container, Segment, Icon } from "semantic-ui-react";
import {withLayout} from "../components/Layout";

const AboutPage = () => {
  return (
    <Container>
      <Segment vertical>
        <Header as="h2">
          <Icon name="info circle" />
          <Header.Content>
            About
          </Header.Content>
        </Header>
      </Segment>
      <Segment vertical>
        <p>

        The philosophy of the 6th Column Project is that we can do
        more to create a seamless interaction between people and our
        computing environment.  We also believe that computing as it
        is cast is due for an evolutionaly step change.  W3 and
        peer-to-peer efforts are necessary for us truly bring forth an
        era where compting even more greatly reduces toil and becomes
        an integral part in cooperative problem solving. Aggressive
        automation to rid ourselves from incidental complexity just
        from combersome interfaces and less than streamlined processes
        and work flows.
        </p>

        <p>
        The team has consistently solved big problems in various areas
        of computing.  From the financial sector (Wall St & major
        FinTechs), to pure science research in national science
        laboratories, to high throughput streaming, to creating and
        building Nobel Prize winning climate science peer-to-peer
        infrastructure - the team here is of seasoned problem solvers.
        </p>
        
        <p>

        The team has shared singular vision of computing.  The time is
        right. The confluence of technology and the raised awareness
        and sophistication of the general populous around technology
        has created an appetite for releaving our current fatigue with
        the status quo. We are ready to engage in a new way.

        </p>
        
        <p>
        <b>Stay Tuned...</b>
        </p>
      </Segment>
    </Container>
  );
};

export default withLayout(AboutPage);
