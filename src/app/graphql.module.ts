import { NgModule} from '@angular/core';
import { APOLLO_OPTIONS } from 'apollo-angular';
import { ApolloClientOptions, ApolloLink, InMemoryCache } from '@apollo/client/core';
import { HttpLink } from 'apollo-angular/http';
import { setContext } from '@apollo/client/link/context';
import { HttpClientModule } from '@angular/common/http';

const uri = 'https://adrp.gorge.nz/graphql';

export function createApollo( httpLink: HttpLink ): ApolloClientOptions<any> {

  const basic = setContext((operation, context) => ({
    headers: {
      Accept: 'charset=utf-8'
    }
  }));

  const auth = setContext((operation, context) => {

    const token = sessionStorage.getItem('currentJwt');

    if (token === null) {

      console.log( "NOT LOGGED IN" )
      return {};

    } else {

      // console.log( "LOGGED IN" + token )
      return {
        headers: {
          Authorization: `Bearer ${token}`
        }
      };

    }
  });

  const link = ApolloLink.from([ basic, auth, httpLink.create({ uri }) ]);
  const cache = new InMemoryCache();


  return {
    // link: httpLink.create({uri}),
    // cache: new InMemoryCache(),
    link: link,
    cache: cache,
  };

}

@NgModule({
  exports: [
    HttpClientModule,
  ],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}
