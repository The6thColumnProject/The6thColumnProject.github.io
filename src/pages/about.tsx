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
          computing environment.  We also believe that computing as is
          due for an evolutionary step change.  W3 and peer-to-peer
          efforts are necessary tenets for us truly bring forth an era
          where computing reduces toil even more profoundly and becomes
          an integral part in cooperative problem solving. Aggressive
          automation will greatly reduce the pain from incidental
          complexity, cumbersome interfaces and convoluted processes.

        </p>

        <p>

          Our team has consistently solved big problems in various areas of computing at scale.
          <ul>
            <li><b>Financial sector:</b> Building trading and portfolio
              management systems for Wall Street.  Creating infrastructure
              supporting major FinTechs.</li>

          <li><b>Pure science research:</b> Working in the worldwide national
            laboratory system solving problems in energy and climate
            science.  Building critical aspects of advanced research
            energy fusion systems to architecting and building a
            world-wide peer-to-peer system for the transport and
            sharing of climate data, and computation of climate
            science models around the world. (Recipient of a Nobel
            Prize and R&D 100 award)</li>

          <li><b>Platforms:</b> High throughput, durable media
            streaming platforms, supporting millions of simultaneous
            clients around the world.

            Building AI-Ops systems and scaling them to web-scale, for
            the largest cloud provider in the world. Customer_Company
            names...</li>

          </ul>
        </p>

        <p>
          We are seasoned leaders, problem solvers, pragmatists and futurists.
        </p>

        <p>

        The team has a shared vision of computing.  The confluence of
        technologies and the raised awareness and technical
        sophistication of the general populous has created the right
        conditions to introduce compelling solutions.  The 6th Column
        Project is crafting solutions that will relieve our current
        fatigue with the status quo and empower us to solve problems
        cooperatively.

        </p>

        <p>
        <b>Stay Tuned...</b>
        </p>
      </Segment>
    </Container>
  );
};

export default withLayout(AboutPage);
