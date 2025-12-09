import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { panelData } from '../data/panelData';
import './TrendProfil.css'; // Vi henter stylingen fra CSS filen

export default function BoernePanel() {
    return (
      <>
      <section className="trendoverblik">
        <article className="top">
          <h1> Panel</h1>
        </article>
      </section>
      <section className='kort'>

      </section>
      </>
    )
  }