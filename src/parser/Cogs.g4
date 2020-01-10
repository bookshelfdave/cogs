grammar Cogs;

prog:	(expr NEWLINE)* ;
expr:	left=expr ('*'|'/') right=expr
    |	left=expr ('+'|'-') right=expr
    |	INT
    |	'(' expr ')'
    ;
NEWLINE : [\r\n]+ ;
ID          :       LOWER (UPPER | LOWER | DIGIT | '_')*;

DOT         :    '.';

fragment LOWER : 'a' .. 'z';
fragment UPPER : 'A' .. 'Z';

INT             :   DIGIT+;
fragment DIGIT  : '0' .. '9';

FLOAT       :       DIGIT+ DOT DIGIT*
                    | DOT DIGIT+
                       ;

STRING  :  '"' (ESC|.)*? '"';
fragment ESC : '\\"' | '\\\\' ;


LINE_COMMENT  : '//' .*? '\r'? '\n' -> skip ;
COMMENT       : '/*' .*? '*/'       -> skip ;

WS      :       [ \t\r\n]+ -> skip;