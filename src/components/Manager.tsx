import {Component, ReactNode} from "react";
import * as React from 'react';
import {Col, FormGroup, Row} from 'reactstrap';
import Input from "reactstrap/lib/Input";
import Label from "reactstrap/lib/Label";

interface IState {
  en: string;
  eo: string;
  meaning: string;
  word: string;
}

export class Manager extends Component<{}, IState> {

  constructor(props: {}) {
    super(props);
    this.state = {
      en: '',
      eo: '',
      meaning: '',
      word: '',
    };
    this.addWordHandler = this.addWordHandler.bind(this);
    this.addEn = this.addEn.bind(this);
    this.addEo = this.addEo.bind(this);
    this.addMeaning = this.addMeaning.bind(this);
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
              />
            </FormGroup>
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
}