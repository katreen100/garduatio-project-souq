// add folders for dashboard pages here

{/* <label> All Variations English </label>
          {Products.map((product) => {
            return Object.entries(product.allVariations).map(([keyAllVariation, valueAllVariation]) => {
              return (
                <select key={keyAllVariation.toString()} required={true} name="color" onChange={handleChange} value={product.color}>
                  <option key={keyAllVariation} value='DEFAULT' disabled> {keyAllVariation}</option>
                  {
                    valueAllVariation.map((col) => <option key={col.toString()}>{col}</option>)
                  }
                </select>
              )
            })
          })} */}