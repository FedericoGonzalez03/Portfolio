{-#LANGUAGE GADTs #-}
{-# OPTIONS_GHC -fno-warn-tabs #-}
{-# OPTIONS_GHC -fno-warn-missing-methods #-}

module Naturales where

import Prelude (Show)

data Bool where{True :: Bool;
                False :: Bool;} deriving(Show)

data N where { O :: N; 
               S :: N -> N } deriving Show


(*):: N -> N -> N
(*) = \n -> \m -> case n of {
    O -> O;
    S k -> m + (k*m)
}


(+):: N -> N -> N
(+) = \n -> \m -> case n of {
    O -> m;
    S k -> S (k + m)
}


	
not :: Bool -> Bool
not = \b -> case b of {
    True->False;
    False->True
}

(&&) :: Bool -> Bool -> Bool
(&&) = \b1 -> \b2 -> case b1 of {
    True->b2;
    False->False;
}

(||) :: Bool -> Bool -> Bool
(||) = \b1 -> \b2 -> case b1 of {
    True->True;
    False->b2
}

uno :: N
uno = S O 

dos :: N 
dos = S uno

tres :: N
tres = S dos

cuatro :: N
cuatro = S tres

cinco :: N
cinco = S cuatro

predecesor :: N -> N
predecesor = \n -> case n of {
	O -> O;
	S x -> x
	}



--Ejercicio 1
mulfi :: N -> (N -> N) -> N
mulfi = \n -> \f -> case n of{
                O -> f O;
                S x -> (f n) * (mulfi x f); 
}

--Ejercicio 2
mulfpi :: N -> (N -> N) -> (N -> Bool) -> N
mulfpi = \n -> \f -> \p -> case n of{
                O -> case (p O) of{
                    False -> S O;
                    True -> f O;
                };
                S x -> case p(S x) of{
                    True -> (f n) * (mulfpi x f p);
                    False -> (mulfpi x f p);
                }
}

--Ejercicio 3
valle :: N -> N -> N -> Bool
valle = \x -> \y -> \z -> case y of{
                O -> True;
                S n -> case x of{
                    O -> False;
                    S k -> case z of{
                        O -> False;
                        S l -> valle k n l;
                    }
                }
}