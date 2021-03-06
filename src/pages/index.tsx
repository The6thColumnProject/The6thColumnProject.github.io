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
        <Header inverted as="h1"><b class="under_gold">The </b><b class="under_green">6th Column </b>
<b class="under_red">Project</b></Header>
        <Header inverted as="h2">Take <b class="under_gold">your </b><b class="under_green">internet </b>
<b class="under_red">personally</b>!</Header>
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
              personalization is the key to establishing a new, more
              productive internet. An internet that's more enriching
              and a truer conduit of cooperative relationships. Our
              society is woven with the fabric of technology. It
              should not entangle us but support us to think and work
              at a higher level.<br/><br/>

            </p>
          </Grid.Column>

          <Grid.Column width="8" floated="right">
            <Header>p2p</Header>
            <p>

            We cast our work in the peer-to-peer context.  We support
            initiatives like W3 and Open Source software.  We focus on
            novel inter/intra computing tools, infrastructure,
            networking and interactions. We believe decentralization
            better maps to our society and is more fertile ground for
            new modes of collaboration and problem solving.

            </p>

          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    {/* Key features */}
  </div>;

export default withLayout(IndexPage);
