import styled from "styled-components";
import Link from "next/link";
import { useState } from "react";

export default function Main() {
  const [text, setText] = useState<string>("TEST PAGE");
  const Main = styled.main`
    padding: 5rem 0;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;
  const Title = styled.h1`
    margin: 0;
    line-height: 1.15;
    font-size: 4rem;
    text-align: center;
    &:hover,
    &:focus,
    &:active {
      text-decoration: underline;
    }
    a {
      color: #0070f3;
      text-decoration: none;
    }
  `;
  const Description = styled.p`
    line-height: 1.5;
    font-size: 1.5rem;
    text-align: center;
  `;
  const Code = styled.code`
    background: #fafafa;
    border-radius: 5px;
    padding: 0.75rem;
    font-size: 1.1rem;
    font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
      DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
  `;
  const Grid = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 800px;
    margin-top: 3rem;
  `;
  const Card = styled.a`
    margin: 1rem;
    flex-basis: 45%;
    padding: 1.5rem;
    text-align: left;
    color: inherit;
    text-decoration: none;
    border: 1px solid #eaeaea;
    border-radius: 10px;
    transition: color 0.15s ease, border-color 0.15s ease;
    &:hover,
    &:focus,
    &:active {
      color: #0070f3;
      border-color: #0070f3;
    }
    h3 {
      margin: 0 0 1rem 0;
      font-size: 1.5rem;
    }
    p {
      margin: 0;
      font-size: 1.25rem;
      line-height: 1.5;
    }
  `;

  return (
    <Main>
      <Title>{text}</Title>

      <Description>
        feature/SYL-001 <Code>pages/index.js</Code>
      </Description>

      <Grid>
        <Link href="/sub">
          <Card>
            <h3>Sub &rarr;</h3>
            <p>서브 페이지로 이동</p>
          </Card>
        </Link>
      </Grid>
    </Main>
  );
}
