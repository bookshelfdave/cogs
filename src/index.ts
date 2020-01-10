import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts';
import { ParseTreeWalker } from 'antlr4ts/tree/ParseTreeWalker';
import { CogsLexer } from './parser/CogsLexer';
import { CogsListener } from './parser/CogsListener';
import { CogsListenerImpl } from './parser/CogsListenerImpl';
import { CogsParser } from './parser/CogsParser';

// export { CompilationUnitContext };

class Startup {
  static main(): number {
    console.log('Cogs 0.1.0');
    const source = '1+2\n';
    const chars = new ANTLRInputStream(source);
    const lexer = new CogsLexer(chars);
    const tokens = new CommonTokenStream(lexer);
    const parser = new CogsParser(tokens);
    const tree = parser.prog();

    const listener = new CogsListenerImpl();
    ParseTreeWalker.DEFAULT.walk(listener as CogsListener, tree);
    const result = listener.getValues().get(tree);
    console.log('RESULT = ' + result);
    return 0;
  }
}

Startup.main();
