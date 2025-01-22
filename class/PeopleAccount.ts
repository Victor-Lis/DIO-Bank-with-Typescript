import { DioAccount } from "./DioAccount"

export class PeopleAccount extends DioAccount {
  private doc_id: number

  constructor(doc_id: number, name: string){
    super(name)
    this.doc_id = doc_id
  }

  showDocumentId = (): void => {
    console.log()
    console.log("---------Documento---------");
    console.log(this.doc_id)
    console.log("---------------------------");
  }
}