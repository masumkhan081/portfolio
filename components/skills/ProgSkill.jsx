import React from "react";
import Image from "next/image";
import Uhunt from "../../public/images/Uhunt.png";
// import { Github } from "react-icons/ai";
import SkillSetIcon from "../../public/icons/SkillSetIcon";
import Github from "../../public/icons/Github";

//
export default function ProgSkill() {
  return (
    <div className="bg-surface border border-border rounded-lg shadow-sm overflow-hidden md:w-1/3 sm:w-2/5 w-full">
      <span className="flex items-center gap-2 text-sm font-bold text-content-primary bg-surface-subtle px-3 py-2 w-full">
        <SkillSetIcon clsnames="me-1 inline w-5 h-5" /> Programming
      </span>
      <ul className="mt-3 mb-3 flex flex-col gap-2 w-full px-3">
        <li className="w-fit">
          <a
            className="inline-flex items-center gap-1.5 px-3 py-1 text-sm rounded-md border border-border bg-surface-raised text-content-brand hover:border-border-brand hover:text-brand transition-all duration-200 shadow-sm"
            href="https://uhunt.onlinejudge.org/id/759640"
            target="_blank"
          >
            UVA uHunt Profile
          </a>
        </li>

        <li className="w-fit">
          <label
            htmlFor="modal-uhunt"
            className="inline-flex items-center gap-1.5 px-3 py-1 text-sm rounded-md border border-border bg-surface-raised text-content-brand hover:border-border-brand hover:text-brand transition-all duration-200 shadow-sm cursor-pointer"
          >
            UVA uhunt stats
          </label>

          <Uhunt_Stats />
        </li>

        <li className="w-fit">
          <label
            htmlFor="modal-classicalgo"
            className="inline-flex items-center gap-1.5 px-3 py-1 text-sm rounded-md border border-border bg-surface-raised text-content-brand hover:border-border-brand hover:text-brand transition-all duration-200 shadow-sm cursor-pointer"
          >
            Classic Algorithm
          </label>
          <Cl_Algo_Modal />
        </li>
        <li className="w-fit">
          <label
            htmlFor="modal-ml"
            className="inline-flex items-center gap-1.5 px-3 py-1 text-sm rounded-md border border-border bg-surface-raised text-content-brand hover:border-border-brand hover:text-brand transition-all duration-200 shadow-sm cursor-pointer"
          >
            Machine Learning
          </label>
          <ML_Modal />
        </li>
      </ul>
    </div>
  );
}

function Uhunt_Stats() {
  return (
    <>
      <input type="checkbox" id="modal-uhunt" className="modal-toggle" />
      <div className="modal  ">
        <div className="modal-box w-11/12 max-w-5xl  h-8/12 ">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="modal-uhunt"
              className=" rounded-md text-center border-0 text-sm-lg btn-error absolute right-2 top-2 w-1/4 font-bold bg-content-primary text-content-on-brand"
            >
              C L O S E
            </label>
            <h3 className=" w-1/3 px-1 text-sm-lg rounded-md absolute left-2 top-2 text-center text-content-primary">
              Uhunt Stats
            </h3>
          </div>

          <div className="  container bg-surface-subtle">
            <Image
              className="  w-fit   h-fit mt-3"
              src={Uhunt}
              alt="https://uhunt.onlinejudge.org/id/759640"
            />
          </div>
          <div className="modal-action ">
            <label
              htmlFor="modal-uhunt"
              className="btn btn-square bg-surface btn-outline btn-sm w-full"
            >
              Close
            </label>
          </div>
        </div>
      </div>
    </>
  );
}
function Cl_Algo_Modal() {
  return (
    <>
      <input type="checkbox" id="modal-classicalgo" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle ">
        <div className="modal-box py-0 ">
          <div className="flex flex-row justify-between gap-2 my-2 ">
            <h3 className="font-bold text-lg text-center text-content-muted">
              Classic Algorithms{" "}
              <span className="badge bg-success bg-opacity-5 border-0 text-green-500">
                Click On Category to Expand{" "}
              </span>
            </h3>
            <label
              htmlFor="modal-classicalgo"
              className="btn btn-sm btn-square btn-outline px-2 w-fit"
            >
              x
            </label>
          </div>

          <div className="collapse bg-surface py-0 ">
            <input type="checkbox" className="my-0 py-0" />
            <div className="collapse-title text-base font-bold text-content-brand bg-surface-subtle rounded-lg border-t-2 border-brand-subtle">
              Backtracking
              <span className="ms-3 rounded-lg bg-brand-dark text-brand-muted px-2">
                4
              </span>
            </div>
            <div className="collapse-content ">
              <ul className="text-sm list-disc list-inside ">
                <li>Knights tour</li>
                <li>The Word Break Problem</li>
              </ul>
              <ul className="text-sm list-disc list-inside ">
                <li>Rat In A Maze</li>
                <li>N Queen</li>
              </ul>
            </div>
          </div>
          <div className="collapse bg-surface py-0 ">
            <input type="checkbox" className="my-0 py-0" />
            <div className="collapse-title text-base font-bold text-content-brand bg-surface-subtle rounded-lg border-t-2 border-brand-subtle">
              Dynamic Algorithm
              <span className="ms-3 rounded-lg bg-brand-dark text-brand-muted px-2">
                20
              </span>
            </div>
            <div className="collapse-content ">
              <ul className="text-sm grid sm:grid-cols-2 grid-cols-1 list-disc list-decimal list-inside gap-y-2">
                <>
                  <li>Bellman Ford Shortest PAth</li>
                  <li>Binomial Coefficient Using Dynamic Programming</li>
                  <li>Coin Change ( Minimum Number Of Coins )</li>
                  <li>Coin Chang ( Number Of Ways )</li>
                  <li>Edit Distance Levenshtein</li>
                  <li>Fibonacci Memoized Version</li>
                  <li>Fibonacci Tabulated version</li>
                  <li>Floyed Warshall ShortestPath</li>
                  <li>Optimal Strategy Game Pick</li>
                  <li>Weighted Job Scheduling</li>
                </>
                <>
                  <li>Longest Bitonic Subsequence</li>
                  <li>Longest Common Subsequence</li>
                  <li>Longest Common Substring</li>
                  <li>Longest Palindromic Subsequence</li>
                  <li>Longest Increasing Subsequence</li>
                  <li>Rod Cutting Problem</li>
                  <li>Matrix Chain Multiplication</li>
                  <li>Subset Sum Problem</li>
                  <li>Text Justification</li>
                  <li>Zero 1 knapsack</li>
                </>
              </ul>
            </div>
          </div>
          <div className="collapse bg-surface py-0 ">
            <input type="checkbox" className="my-0 py-0" />
            <div className="collapse-title text-base font-bold text-content-brand bg-surface-subtle rounded-lg border-t-2 border-brand-subtle">
              Graph & Greedy Algorithms{" "}
              <span className="ms-3 rounded-lg bg-brand-dark text-brand-muted px-2">
                8
              </span>
            </div>
            <div className="collapse-content ">
              <ul className="text-sm grid sm:grid-cols-2 grid-cols-1 list-decimal list-inside ">
                <>
                  <li>Floyd Warshall</li>
                  <li>Fractional Knapsack</li>
                  <li>BellmanFord Algorithm</li>
                  <li>Topological Sort</li>
                </>
                <>
                  <li>BFS</li>
                  <li>DFS</li>
                  <li>Huffman Coding</li>
                  <li>Dijkstra</li>
                </>{" "}
              </ul>
            </div>
          </div>
          <div className="collapse bg-surface py-0 ">
            <input type="checkbox" className="my-0 py-0" />
            <div className="collapse-title text-base font-bold text-content-brand bg-surface-subtle rounded-lg border-t-2 border-brand-subtle">
              Number Theory
              <span className="ms-3 rounded-lg bg-brand-dark text-brand-muted px-2">
                22
              </span>
            </div>
            <div className="collapse-content ">
              <ul className="text-sm grid sm:grid-cols-2 grid-cols-1 list-decimal list-inside">
                <>
                  <li>Binomial Coefficient SpaceOptimized</li>
                  <li>Euler Totient Function</li>
                  <li>Sieve OF Eratosthenes</li>
                  <li>Chinese Remainder inverse mod based</li>
                  <li>Primality Test Miller Rabin</li>
                  <li>Primality Test Fermat Method</li>
                  <li>Modular multiplicative inverse</li>
                  <li>Least Common Multiple</li>
                  <li>Modular Exponentiation</li>
                  <li>Least Common Multiple LadderMethod</li>
                </>
                <>
                  <li>Wilsons Theorem</li>
                  <li>Swap Without 3rd Var</li>
                  <li>Segmented Sieve</li>
                  <li>Segmented Sieve</li>
                  <li>Prime factorization</li>
                  <li>GCD Eucledian</li>
                  <li>GCF Using LCM</li>
                  <li>GCF Ladder Method</li>
                  <li>Goldbechs conjecture</li>
                  <li>Pollard Rho Algorithm</li>
                  <li>Minimax Algorithm</li>
                  <li>Chinese Remainder</li>
                </>
              </ul>
            </div>
          </div>
          <div className="collapse bg-surface py-0 ">
            <input type="checkbox" className="my-0 py-0" />
            <div className="collapse-title text-base font-bold text-content-brand bg-surface-subtle rounded-lg border-t-2 border-brand-subtle">
              Pattern Matching
              <span className="ms-3 rounded-lg bg-brand-dark text-brand-muted px-2">
                6
              </span>
            </div>
            <div className="collapse-content ">
              <ul className="text-sm grid sm:grid-cols-2 grid-cols-1 list-decimal list-inside">
                <>
                  <li>Knuth Moris Pratt</li>
                  <li>Wild Card Matching</li>
                  <li>Boyer Moore Horspool</li>
                </>
                <>
                  <li>Rabin Karp</li>
                  <li>Aho Corasick</li>
                  <li>Z algorithm</li>
                </>
              </ul>
            </div>
          </div>
          <div className="collapse bg-surface py-0 ">
            <input type="checkbox" className="my-0 py-0" />
            <div className="collapse-title text-base font-bold text-content-brand bg-surface-subtle rounded-lg border-t-2 border-brand-subtle">
              Recursion
              <span className="ms-3 rounded-lg bg-brand-dark text-brand-muted px-2">
                10
              </span>
            </div>
            <div className="collapse-content ">
              <ul className="text-sm grid sm:grid-cols-2 grid-cols-1 list-decimal list-inside">
                <>
                  <li>Binomial Coefficient RecursionApproach</li>
                  <li>Binary Search Recursive Way</li>
                  <li>Reversing String Via Recursion</li>
                  <li>Indirect Recursion</li>
                  <li>Non Tail Recursion</li>
                </>
                <>
                  <li>Direct Recursion</li>
                  <li>Factorial</li>
                  <li>Fibonacci</li>
                  <li>Tail Recursion</li>
                  <li>GCD By Recursion</li>
                </>
              </ul>
            </div>
          </div>
          <div className="collapse bg-surface py-0 ">
            <input type="checkbox" className="my-0 py-0" />
            <div className="collapse-title text-base font-bold text-content-brand bg-surface-subtle rounded-lg border-t-2 border-brand-subtle">
              Searching And Sorting
              <span className="ms-3 rounded-lg bg-brand-dark text-brand-muted px-2">
                7
              </span>
            </div>
            <div className="collapse-content ">
              <ul className="text-sm grid sm:grid-cols-2 grid-cols-1 list-decimal list-inside">
                <>
                  <li>Linear search</li>
                  <li>Binary Search</li>
                  <li>Bubble Sort</li>
                  <li>Insertion Sort</li>
                </>
                <>
                  <li>Merge Sort</li>
                  <li>Quick Sort</li>
                  <li>Selection Sort</li>
                </>
              </ul>
            </div>
          </div>
          <div className="modal-action ">
            <label
              htmlFor="modal-classicalgo"
              className="btn btn-square bg-surface btn-outline btn-sm w-full"
            >
              Close
            </label>
          </div>
        </div>
      </div>
    </>
  );
}
function ML_Modal() {
  return (
    <>
      <input type="checkbox" id="modal-ml" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Machine Learning Raw Coding</h3>
          <a
            href="https://github.com/masumkhan081/ml_algo"
            target="_blank"
            className="text-content-on-brand"
          >
            <Github clsnames="me-1 w-5 h-5 inline" />
            Github src
          </a>
          <div className="py-3">
            <ul className="list-inside list-disc">
              <li>K-nearest Neighbors</li>
              <li>Naive Bayes classifier</li>
              <li>Decision tree</li>
              <li>K-means clustering</li>
              <li>Stochastic gradient descent</li>
              <li>Support vector machine</li>
              <li>Slope One</li>
              <li>Agglomerative Hierarchical Clustering</li>
            </ul>
          </div>
          <div className="modal-action">
            <label htmlFor="modal-ml" className="btn">
              C L O S E
            </label>
          </div>
        </div>
      </div>
    </>
  );
}
