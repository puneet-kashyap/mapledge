import React from 'react';
import { Button } from '@material-ui/core';
import './home.css';
import assets from '../../assets/constants';

class Home extends React.Component {
  render() {
    return (
      <main>
        <section className="staffing">
          <h1 className="title">
            Recruitment &amp; <br /> Staffing solutions
          </h1>
          <div>
            <Button variant="contained" color="primary">
              Learn more
            </Button>
          </div>
        </section>
        <section className="find">
          {assets.marketing.map((item, index) => {
            return (
              <div className="marketing">
                <h2 className="marketing-name">{item.name}</h2>
                <p>{item.desc}</p>
                <h4>{item.slogan}</h4>
                <Button variant="contained">
                  Learn more
                </Button>
              </div>
            );
          })}
        </section>
      </main>
    );
  }
}

export default Home;
