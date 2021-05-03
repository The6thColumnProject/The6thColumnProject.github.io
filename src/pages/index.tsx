import * as React from "react";
import { Link } from "gatsby";
import HeaderMenu from "../components/HeaderMenu/HeaderMenu";
import { withLayout, LayoutProps, menuItems } from "../components/Layout";
import {
  Segment,
  Container,
  Grid,
  Header,
  Icon,
} from "semantic-ui-react";

const IndexPage = (props: LayoutProps) =>
  <div>
    {/* Master head */}
    <Segment vertical inverted textAlign="center" className="masthead">
      <HeaderMenu
        Link={Link} pathname={props.location.pathname} items={menuItems} inverted
      />
      <Container text>
        <Header inverted as="h1"><b>The 6th Column Project</b></Header>
        <Header inverted as="h2">Creating the next evolution in technology interation</Header> 
        Currently in stealth mode...
     </Container>
    </Segment>

    {/* About this starter */}
    <Segment vertical className="stripe">
      <Grid stackable verticalAlign="top" className="container">
        <Grid.Row>
          <Grid.Column width="8">
            <Header>automation</Header>
            <p>

              Our projects follow a common theme of reducing human
              toil. We believe that hyper automation and
              personalization is fundamental to establishing a new,
              more productive, enriching and cooperative relationship
              among ourselves through our computing tools.

            </p>
          </Grid.Column>

          <Grid.Column width="8" floated="right">
            <Header>p2p</Header>
            <p>
            
            We cast our work in the peer-to-peer context.  We support
            W3 initiatives, Open Source and focus on novel inter/intra
            computing interactions and networking.

            </p>

          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    {/* Key features */}
  </div>;

export default withLayout(IndexPage);
