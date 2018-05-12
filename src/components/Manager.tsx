import {Component, ReactNode} from "react";
import * as React from 'react';
import {Col, FormGroup, Row} from 'reactstrap';
import Input from "reactstrap/lib/Input";
import Label from "reactstrap/lib/Label";

interface IMeaning {
  examples: string[];
  value: string;
}

interface IState {
  addExample?: number;
  antonym: string;
  antonyms: number[];
  en: string;
  eo: string;
  example: string;
  meaning: string;
  meanings: IMeaning[];
  root?: { value: string; id: number };
  rootValue: string;
  synonym: string;
  synonyms: number[];
  tag: string;
  word: string;
}

export class Manager extends Component<{}, IState> {

  constructor(props: {}) {
    super(props);
    this.state = {
      addExample: void 0,
      antonym: '',
      antonyms: [],
      en: '',
      eo: '',
      example: '',
      meaning: '',
      meanings: [],
      root: void 0,
      rootValue: '',
      synonym: '',
      synonyms: [],
      tag: '',
      word: '',
    };
    this.addWordHandler = this.addWordHandler.bind(this);
    this.addEn = this.addEn.bind(this);
    this.addEo = this.addEo.bind(this);
    this.addMeaning = this.addMeaning.bind(this);
    this.saveMeaning = this.saveMeaning.bind(this);
    this.removeMeaning = this.removeMeaning.bind(this);
    this.addExample = this.addExample.bind(this);
    this.addExampleValue = this.addExampleValue.bind(this);
    this.saveExample = this.saveExample.bind(this);
    this.searchAntonym = this.searchAntonym.bind(this);
    this.searchSynonym = this.searchSynonym.bind(this);
    this.searchTag = this.searchTag.bind(this);
    this.searchRoot = this.searchRoot.bind(this);
  }

  public render(): ReactNode {
    return (
      <div className="container">
        <Row>
          <Col md="6">
            <FormGroup>
              <Label for="word">Word value</Label>
              <Input placeholder="Type word" id="word" value={this.state.word} onChange={this.addWordHandler}/>
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Label for="en">English</Label>
              <Input placeholder="English" id="en" value={this.state.en} onChange={this.addEn}/>
            </FormGroup>
            <FormGroup>
              <Label for="eo">Esperanto</Label>
              <Input placeholder="Esperanto" id="eo" value={this.state.eo} onChange={this.addEo}/>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md="6">
            <FormGroup>
              <Label for="meaning">Add new meaning</Label>
              <Input
                type="textarea"
                placeholder="Add new meaning"
                id="meaning"
                value={this.state.meaning}
                onChange={this.addMeaning}
                onKeyDown={this.saveMeaning}
              />
            </FormGroup>
            {this.state.meanings.map((meaning: IMeaning, i) => {
              return (
                <div key={i}>
                  <Row>
                    <Col md="9">
                      <p>
                        {meaning.value}
                      </p>
                    </Col>
                    <Col md="3">
                      <button id={i.toString()} className="btn btn-success" onClick={this.addExample}>Ex</button>
                      <button id={i.toString()} className="btn btn-danger" onClick={this.removeMeaning}>X</button>
                    </Col>
                  </Row>
                  {meaning.examples.map((e: string, index) => <p key={index}>{e}</p>)}
                  {this.state.addExample !== void 0 && (
                    <FormGroup>
                      <Input
                        type="textarea"
                        placeholder="Add new example"
                        id="example"
                        value={this.state.example}
                        onChange={this.addExampleValue}
                        onKeyDown={this.saveExample}
                      />
                    </FormGroup>
                  )}
                </div>
              );
            })}
          </Col>
          <Col md="6">
            <Row>
              <Col md="6">
                <FormGroup>
                  <Label for="root">Root</Label>
                  <Input placeholder="type..." id="root" value={this.state.rootValue} onChange={this.searchRoot}/>
                </FormGroup>
              </Col>
              <Col md="3">
                Root id: {this.state.root && this.state.root.id || 0}
              </Col>
              <Col md="3">
                Root value: {this.state.root && this.state.root.value || 'undefined'}
              </Col>
            </Row>
            <FormGroup>
              <Label for="tags">Tags</Label>
              <Input placeholder="type..." id="tags" value={this.state.tag} onChange={this.searchTag}/>
            </FormGroup>
            <Row>
              <Col md="6">
                <FormGroup>
                  <Label for="synonyms">Synonyms</Label>
                  <Input placeholder="type..." id="synonyms" value={this.state.synonym} onChange={this.searchSynonym}/>
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <Label for="antonyms">Antonyms</Label>
                  <Input placeholder="type..." id="antonyms" value={this.state.antonym} onChange={this.searchAntonym}/>
                </FormGroup>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }

  private addWordHandler(e: any) {
    this.setState({
      word: e.target.value,
    });
  }

  private addMeaning(e: any) {
    this.setState({
      meaning: e.target.value,
    });
  }

  private addEo(e: any) {
    this.setState({
      eo: e.target.value,
    });
  }

  private addEn(e: any) {
    this.setState({
      en: e.target.value,
    });
  }

  private addExampleValue(e: any) {
    this.setState({
      example: e.target.value,
    });
  }

  private saveMeaning(e: any) {
    if (e.ctrlKey && e.keyCode === 13) {
      this.setState({
        meaning: '',
        meanings: this.state.meanings.concat([{value: this.state.meaning, examples: []}]),
      });
    }
  }

  private removeMeaning(e: any) {
    const i = parseInt(e.target.id, 10);
    this.setState({
      meanings: this.state.meanings.slice(0, i).concat(this.state.meanings.slice(i + 1)),
    });
  }

  private saveExample(e: any) {
    if (e.ctrlKey && e.keyCode === 13) {
      // tslint:disable-next-line
      console.log(this.state.addExample);
      if (this.state.addExample !== void 0) {
        const m = this.state.meanings[this.state.addExample];
        m.examples.push(this.state.example);
        this.setState({
          addExample: void 0,
          example: '',
          meanings: this.state.meanings.slice(0, this.state.addExample)
            .concat([{
              examples: m.examples,
              value: m.value,
            }])
            .concat(this.state.meanings.slice(this.state.addExample + 1)),
        })
      }
    }
  }

  private addExample(e: any) {
    const i = parseInt(e.target.id, 10);
    this.setState({
      addExample: i,
    });
  }

  private searchAntonym(e: any) {
    // TODO: send request to server
    this.setState({
      antonym: e.target.value,
    });
  }

  private searchSynonym(e: any) {
    // TODO: send request to server
    this.setState({
      synonym: e.target.value,
    });
  }

  private searchTag(e: any) {
    // TODO: send request to server
    this.setState({
      tag: e.target.value,
    });
  }

  private searchRoot(e: any) {
    // TODO: send request to server
    this.setState({
      rootValue: e.target.value,
    });
  }
}