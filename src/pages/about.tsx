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

          The philosophy of the 6th Column Project is simply <i>better
          living through technology</i>. We believe the path to
          getting there is by reducing the friction and needless toil
          we experience in the current state of computing. We endeavor
          to create more seamless interaction between people and our
          computing environments. We get there not necessarily from a
          UI/UX standpoint but from re-imaginig computing from first
          principles. We focus on aggressive automation and hyper
          personalization. We believe that computing is ripe for an
          evolutionary step change. With the advent of utility
          computing, accessible and powerful AI, W3 and peer-to-peer
          networks and the distributed web, we have the necessary base
          for us to bring forth a new era.  We will introduce a new
          model of computing. One where computing will do what we
          imagined it would do; profoundly elevate the human
          condition.

        </p>

        <p>

          Our team has consistently solved big problems in various areas of computing at scale.
          <ul>
            <li><b>Financial sector:</b> Building trading and portfolio
              management systems for Wall Street. Creating robust infrastructure
              supporting major FinTechs.</li>

          <li><b>Pure science research:</b> Working in the worldwide
            national laboratory system, solving problems in energy and
            climate science.  Building critical aspects of advanced
            research energy fusion systems. Architecting and building
            a world-wide peer-to-peer system for the transport and
            sharing of climate data, and computation of climate
            science models around the world. (Recipient of a Nobel
            Prize and R&D 100 award)</li>

          <li><b>Platforms:</b> High throughput, durable media
            streaming platforms, supporting millions of simultaneous
            clients around the world.

            Building AI-Ops systems and scaling them to web-scale for
            the largest cloud provider in the world.</li>

          </ul>
        </p>

        <p>
          We are seasoned leaders, problem solvers, pragmatists and futurists.
        </p>

        <p>

        The team has a shared vision of computing.  The confluence of
        technologies and the magnitude of the challenges we face make
        it encumbent upon us to think differently in order to create
        effective and compelling solutions.  The 6th Column Project is
        crafting solutions that will allow us to be ready to meet the
        future.

        </p>

        <p>
        <b>Stay Tuned...</b>
        </p>
      </Segment>
    </Container>
  );
};

export default withLayout(AboutPage);
